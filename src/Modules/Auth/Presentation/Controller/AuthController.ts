import {CreateUserUseCase} from "../../Domain/useCases/CreateUserUseCase";
import {UserPayload} from "../../Domain/Payloads/UserPayload";
import {MikroORMInstance} from "../../../../Shared/Database/Connection/MikroORMInstance";

export class AuthController {
    static async create(request: Request) {
        const body = request.body as UserPayload;
        const useCase = new CreateUserUseCase();
        return await useCase.execute(body);
    }
}
