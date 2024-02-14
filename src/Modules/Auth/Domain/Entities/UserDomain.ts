import { Role } from './Role';

export interface UserDomain {
    _id?: string;
    username: string;
    password: string;
    role: Role;
    enable?: boolean;
}
