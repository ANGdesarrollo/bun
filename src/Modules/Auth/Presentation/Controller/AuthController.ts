import { CreateUserUseCase } from '../../Domain/useCases/CreateUserUseCase';
import { UserPayload } from '../../Domain/Payloads/UserPayload';
import { ListUsersUseCase } from '../../Domain/useCases/ListUsersUseCase';
import { LoginUserUseCase } from '../../Domain/useCases/LoginUserUseCase';
import { Context } from 'elysia';
import { env } from '../../../../Config/Enviroment/Env';
import { STAGE } from '../../../../Config/Enviroment/IEnv';
import { Cookie } from '../../Domain/Models/Cookie';
import { JWToken } from '../../Domain/Models/JWToken';
import {Email} from "../../../../Shared/Domain/Models/Email";
import {templateForgotEmail} from "../../../../Shared/Helpers/templateForgotEmail";

export class AuthController
{
    static async create(ctx: Context)
    {
        const body = ctx.body as UserPayload;
        const useCase = new CreateUserUseCase();
        return await useCase.execute(body);
    }

    static async login({ jwt, cookie: { auth }, body })
    {
        const useCase = new LoginUserUseCase();
        const user = await useCase.execute(body as UserPayload);

        const accessToken = await JWToken.setJWT({
            username: user.username,
            role: user.role,
            createdAt: new Date()
        }, jwt);

        Cookie.generateCookie(auth, accessToken);

        return user;
    }

    static async forgotPassword({ jwt, body }) {
        const recoverToken = await JWToken.setJWT({
            username: body.username,
            createdAt: new Date()
        }, jwt);
        const link = `${env.FRONT_END_URL}/${recoverToken}`;
        await Email.createTransport(templateForgotEmail('alexisgraff123@gmail.com', link));

        return true;
    }

    static async list()
    {
        const useCase = new ListUsersUseCase();

        return await useCase.execute();
    }
}
