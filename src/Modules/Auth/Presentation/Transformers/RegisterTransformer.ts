import { User } from '../../Domain/Entities/User';
export class RegisterTransformer
{
    private username: string;
    private enable: boolean;
    private id: string;
    constructor(payload: User)
    {
        this.id = payload._id;
        this.username = payload.username;
        this.enable = payload.enable;
    }
}
