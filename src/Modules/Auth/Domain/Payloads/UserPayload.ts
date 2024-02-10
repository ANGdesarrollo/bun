import { IRole } from '../Entities/IRole';

export type UserPayload = {
    username: string;
    password: string;
    role: IRole;
    enable: boolean;
}
