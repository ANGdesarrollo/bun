import { UserPayload } from '../Payloads/UserPayload';
import { Base } from '../../../../Shared/Models/Base';

export class User extends Base
{
    private username: string;
    private password: string;
    private enable: boolean;

    constructor(payload: UserPayload)
    {
        super();
        this.username = payload.username;
        this.password = payload.password;
    }

    getUsername(): string
    {
        return this.username;
    }

    setUsername(username: string): void
    {
        this.username = username;
    }

    getPassword(): string
    {
        return this.password;
    }

    setPassword(password: string): void
    {
        this.password = password;
    }

    isEnabled(): boolean
    {
        return this.enable;
    }

    setEnabled(enable: boolean): void
    {
        this.enable = enable;
    }
}
