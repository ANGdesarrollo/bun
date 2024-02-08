import { UserPayload } from '../Payloads/UserPayload';
import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { User } from '../Entities/User';
import { UserEntity } from '../../Infraestructure/Schema/User';

export class CreateUserUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository(UserEntity.name);
    }

    async execute(payload: UserPayload)
    {
        const user = new User(payload);
        return this.repository.create(user);
    }
}
