import { UserPayload } from '../Payloads/UserPayload';
import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { User } from '../Entities/User';

export class ListUsersUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository('User');
    }

    async execute()
    {
        return this.repository.list();
    }
}
