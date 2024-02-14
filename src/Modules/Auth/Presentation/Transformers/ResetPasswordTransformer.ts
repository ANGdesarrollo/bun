import { User } from '../../Domain/Entities/User';
import { UserDomain } from '../../Domain/Entities/UserDomain';
export class ResetPasswordTransformer
{
    private username: string;
    private id: string;
    constructor(payload: UserDomain)
    {
        this.id = payload._id;
        this.username = payload.username;
    }
}
