import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { UserGetMePayload } from '../Payloads/UserGetMePayload';

export class GetMeUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository();
    }

    async execute(payload: UserGetMePayload)
    {
        return this.repository.getOneBy({
            username: payload.username
        });
    }
}
