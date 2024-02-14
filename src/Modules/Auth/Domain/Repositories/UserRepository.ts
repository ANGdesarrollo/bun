import {Role} from "../Entities/Role";

export interface UserRepository {
    username: string;
    password: string;
    role: Role;
    enable: boolean;
}
