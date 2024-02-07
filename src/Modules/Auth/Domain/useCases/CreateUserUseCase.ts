import {UserPayload} from "../Payloads/UserPayload";
import {UserRepository} from "../../Infraestructure/Repository/UserRepository";
import {User} from "../Entities/User";

export class CreateUserUseCase {
    private repository: UserRepository
    constructor() {
        this.repository = new UserRepository();
    }

    async execute(payload: UserPayload) {
        const user = new User(payload);
        console.log(user);
        return this.repository.create(user);
    }
}
