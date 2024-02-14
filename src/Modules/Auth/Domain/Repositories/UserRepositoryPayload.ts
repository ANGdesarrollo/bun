import { Role } from '../Entities/Role';

export interface UserRepositoryPayload {
    username: string;
    password: string;
    role: Role;
    enable: boolean;
}
