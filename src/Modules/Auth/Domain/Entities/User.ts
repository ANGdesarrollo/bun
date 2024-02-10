import { UserPayload } from '../Payloads/UserPayload';
import { Base } from '../../../../Shared/Domain/Entities/Base';
import {IRole} from "./IRole";

export class User extends Base
{
    username: string;
    password: string;
    role: IRole;
    enable: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(payload: UserPayload)
    {
        super();
        this.username = payload.username;
        this.password = payload.password;
        this.role = payload.role
        this.enable = false;
    }
}
