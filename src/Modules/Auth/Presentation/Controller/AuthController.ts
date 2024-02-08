import { CreateUserUseCase } from '../../Domain/useCases/CreateUserUseCase';
import { UserPayload } from '../../Domain/Payloads/UserPayload';
import { ListUsersUseCase } from '../../Domain/useCases/ListUsersUseCase';

export class AuthController
{
    static async create(request: Request)
    {
        const body = request.body as unknown as UserPayload;
        const useCase = new CreateUserUseCase();

        return await useCase.execute(body);
    }

    static async list()
    {
        const useCase = new ListUsersUseCase();

        return await useCase.execute();
    }
}
