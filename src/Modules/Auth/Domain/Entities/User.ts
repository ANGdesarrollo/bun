import { Base } from '../../../../Shared/Domain/Entities/Base';
import { Role } from './Role';

export class User extends Base
{
    username: string;
    password: string;
    role: Role;
    enable: boolean;

    constructor(payload: any)
    {
        super();
        this.username = payload.username;
        this.password = payload.password;
        this.role = payload.role;
        this.enable = false;
    }
}
