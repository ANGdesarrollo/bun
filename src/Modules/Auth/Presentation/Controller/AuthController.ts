import { CreateUserUseCase } from '../../Domain/useCases/CreateUserUseCase';
import { ListUsersUseCase } from '../../Domain/useCases/ListUsersUseCase';
import { LoginUserUseCase } from '../../Domain/useCases/LoginUserUseCase';
import { Context } from 'elysia';
import { env } from '../../../../Config/Enviroment/Env';
import { Cookie } from '../../Domain/Models/Cookie';
import { JWToken } from '../../Domain/Models/JWToken';
import { Email } from '../../../../Shared/Domain/Models/Email';
import { templateForgotEmail } from '../../../../Shared/Helpers/templateForgotEmail';
import { UserLoginPayload, UserRegisterPayload } from '../../Domain/Payloads';
import { ResetPasswordUserUseCase } from '../../Domain/useCases/ResetPasswordUseCase';
import { ForgotPasswordUseCase } from '../../Domain/useCases/ForgotPasswordUseCase';

export class AuthController
{
    static async create(ctx: Context)
    {
        const payload = ctx.body as UserRegisterPayload;
        const useCase = new CreateUserUseCase();
        return await useCase.execute(payload);
    }

    static async login({ jwt, cookie: { auth }, body })
    {
        const useCase = new LoginUserUseCase();
        const user = await useCase.execute(body as UserLoginPayload);
        const accessToken = await JWToken.setJWT({
            username: user.username,
            role: user.role,
            createdAt: new Date()
        }, jwt);

        Cookie.generateCookie(auth, accessToken);

        return user;
    }

    static async forgotPassword({ jwt, body })
    {
        const token = await JWToken.setJWT({
            username: body.username,
            createdAt: new Date()
        }, jwt);

        const useCase = new ForgotPasswordUseCase();
        await useCase.handle({
            username: body.username,
            token
        });

        return true;
    }

    static async resetPassword({ jwt, body })
    {
        const token = await JWToken.verifyJWT(body.jwt, jwt);
        const useCase = new ResetPasswordUserUseCase();
        const user = await useCase.handle({
            username: token.value.username,
            password: body.password
        });


        return user;
    }

    static async list()
    {
        const useCase = new ListUsersUseCase();

        return await useCase.execute();
    }
}
