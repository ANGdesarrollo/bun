import {UserPayload} from "../Payloads/UserPayload";

export class User {
    private username: string;
    private password: string;
    private enable: boolean;

    constructor(payload: UserPayload) {
        this.username = payload.username;
        this.password = payload.password;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    isEnabled(): boolean {
        return this.enable;
    }

    setEnabled(enable: boolean): void {
        this.enable = enable;
    }
}
