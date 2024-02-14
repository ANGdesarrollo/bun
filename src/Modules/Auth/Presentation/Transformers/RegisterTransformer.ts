import { User } from '../../Domain/Entities/User';
import { UserDomain } from '../../Domain/Entities/UserDomain';
export class RegisterTransformer
{
    private username: string;
    private enable: boolean;
    private id: string;
    constructor(payload: UserDomain)
    {
        this.id = payload._id;
        this.username = payload.username;
        this.enable = payload.enable;
    }
}
