import { Base } from '../../../../Shared/Domain/Entities/Base';
import { Role } from './Role';
import { UserDomain } from './UserDomain';

export class User extends Base
{
    username: string;
    password: string;
    role: Role;
    enable: boolean;

    constructor(payload: UserDomain)
    {
        super();
        this.username = payload.username;
        this.password = payload.password;
        this.role = payload.role;
        this.enable = false;
    }
}
