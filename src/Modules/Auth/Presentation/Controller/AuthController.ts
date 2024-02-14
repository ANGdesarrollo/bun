import { CreateUserUseCase } from '../../Domain/useCases/CreateUserUseCase';
import { LoginUserUseCase } from '../../Domain/useCases/LoginUserUseCase';
import { Context } from 'elysia';
import { JWToken } from '../../Domain/Models/JWToken';
import {UserRegisterPayload, UserResetPasswordPayload} from '../../Domain/Payloads';
import { GetMeUseCase } from '../../Domain/useCases/GetMeUseCase';
import { GetMeTransformer } from '../Transformers/GetMeTransformer';
import { LoginTransformer } from '../Transformers/LoginTransformer';
import { ForgotPasswordUseCase } from '../../Domain/useCases/ForgotPasswordUseCase';
import { RegisterTransformer } from '../Transformers/RegisterTransformer';
import { ResetPasswordUserUseCase } from '../../Domain/useCases/ResetPasswordUseCase';
import { Cookie } from '../../Domain/Models/Cookie';
import { ResetPasswordTransformer } from '../Transformers/ResetPasswordTransformer';
import { ListUsersUseCase } from '../../Domain/useCases/ListUsersUseCase';

export class AuthController
{
    static async create(ctx: Context)
    {
        const payload = ctx.body as UserRegisterPayload;
        const useCase = new CreateUserUseCase();
        const user = await useCase.execute(payload);

        ctx.set.status = 201;

        return {
            status: true,
            statusCode: 201,
            data: new RegisterTransformer(user)
        };
    }

    static async login(ctx: Context)
    {
        const body = ctx.body as UserRegisterPayload;
        const useCase = new LoginUserUseCase();
        const response = await useCase.execute(body);

        ctx.set.headers['Set-Cookie'] = response.cookie;

        return {
            status: true,
            statusCode: 200,
            data: new LoginTransformer(response.user)
        };
    }

    static async getMe(ctx: Context)
    {
        const token = JWToken.verifyJWT(ctx.cookie.auth.get());
        const useCase = new GetMeUseCase();
        const user = await useCase.execute({
            username: token.data.username
        });

        return {
            status: true,
            statusCode: 200,
            data: new GetMeTransformer(user)
        };
    }

    static async forgotPassword(ctx: Context)
    {
        const params = ctx.params
        const useCase = new ForgotPasswordUseCase();
        await useCase.handle({
            username: ctx.params
        });

        return {
            status: true,
            statusCode: 200,
            data: 'Email correctly sent'
        };
    }

    static async resetPassword(ctx: Context)
    {
        const body = ctx.body as UserResetPasswordPayload
        const token = JWToken.verifyJWT(ctx.cookie.auth.get());
        const useCase = new ResetPasswordUserUseCase();
        const user = await useCase.handle({
            username: token.data.username,
            password: body.password
        });

        return {
            status: true,
            statusCode: 200,
            data: new ResetPasswordTransformer(user)
        };
    }

    static async refreshCookie(ctx: Context)
    {
        const token = JWToken.verifyJWT(ctx.cookie.auth.get());
        const authToken = JWToken.setJWT({
            ...token.data
        });
        ctx.set.headers['Set-Cookie'] = Cookie.generateCookie('auth', authToken);

        return {
            status: true,
            statusCode: 200,
            data: 'Cookie correctly refreshed'
        };
    }

    static async list()
    {
        const useCase = new ListUsersUseCase();

        return await useCase.execute();
    }
}
