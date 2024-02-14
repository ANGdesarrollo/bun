import { User } from '../../Domain/Entities/User';
import { Role } from '../../Domain/Entities/Role';
import { UserDomain } from '../../Domain/Entities/UserDomain';

export class LoginTransformer
{
    private username: string;
    private role: Role;
    private enable: boolean;
    private id: string;
    constructor(payload: UserDomain)
    {
        this.id = payload._id;
        this.username = payload.username;
        this.role = payload.role;
        this.enable = payload.enable;
    }
}
