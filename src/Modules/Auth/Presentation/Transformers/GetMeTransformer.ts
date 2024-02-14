import { User } from '../../Domain/Entities/User';
import { Role } from '../../Domain/Entities/Role';

export class GetMeTransformer
{
    private username: string;
    private role: Role;
    private enable: boolean;
    private id: string;
    constructor(payload: User)
    {
        this.id = payload._id;
        this.username = payload.username;
        this.role = payload.role;
        this.enable = payload.enable;
    }
}
