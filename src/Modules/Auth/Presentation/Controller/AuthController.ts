import { CreateUserUseCase } from '../../Domain/useCases/CreateUserUseCase';
import { UserPayload } from '../../Domain/Payloads/UserPayload';
import { ListUsersUseCase } from '../../Domain/useCases/ListUsersUseCase';
import {LoginUserUseCase} from "../../Domain/useCases/LoginUserUseCase";
import {Context} from "elysia";
import {JWToken} from "../../Domain/Models/JWToken";
import {Cookie} from "../../Domain/Models/Cookie";

export class AuthController
{
    static async create(ctx: Context)
    {
        const body = ctx.body as UserPayload;
        const useCase = new CreateUserUseCase();
        return await useCase.execute(body);
    }

    static async login(ctx: Context)
    {
        const body = ctx.body as UserPayload;
        const useCase = new LoginUserUseCase();
        const user = await useCase.execute(body);
        const accessToken = JWToken.setJWT(user.username);
        Cookie.generateCookie(ctx, 'accessToken', accessToken);
    }

    static async list()
    {
        const useCase = new ListUsersUseCase();

        return await useCase.execute();
    }
}
