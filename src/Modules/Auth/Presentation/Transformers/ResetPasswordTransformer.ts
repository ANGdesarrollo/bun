import { User } from '../../Domain/Entities/User';
export class ResetPasswordTransformer
{
    private username: string;
    private id: string;
    constructor(payload: User)
    {
        this.id = payload._id;
        this.username = payload.username;
    }
}
