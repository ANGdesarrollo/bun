import { UserPayload } from '../Payloads/UserPayload';
import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { User } from '../Entities/User';
import { UserEntity } from '../../Infraestructure/Schema/User';

export class LoginUserUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository(UserEntity.name);
    }

    async execute(body: UserPayload)
    {
        return this.repository.getOneBy({
            username: body.username,
            password: body.password
        })
    }
}
