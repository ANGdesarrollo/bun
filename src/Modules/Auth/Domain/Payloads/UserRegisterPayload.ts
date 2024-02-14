import { Role } from '../Entities/Role';

export type UserRegisterPayload = {
    username: string;
    password: string;
    role: Role;
}
