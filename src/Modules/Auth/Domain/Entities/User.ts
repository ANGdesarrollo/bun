import { UserPayload } from '../Payloads/UserPayload';
import { Base } from '../../../../Shared/Domain/Entities/Base';

export class User extends Base
{

    username: string;
    password: string;
    enable: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(payload: UserPayload)
    {
        super();
        this.username = payload.username;
        this.password = payload.password;
    }
}
