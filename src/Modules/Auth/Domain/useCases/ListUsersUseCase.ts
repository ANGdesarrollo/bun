import { UserRepository } from '../../Infraestructure/Repository/UserRepository';

export class ListUsersUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository();
    }

    async execute()
    {
        return this.repository.list();
    }
}
