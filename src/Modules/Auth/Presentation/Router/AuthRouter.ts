import Elysia from "elysia";

export class AuthRouter {
    app: Elysia;
    routeBase: string;
    constructor(app: Elysia) {
        this.app = app
        this.routeBase = "/api/auth"
    }

    public start() {
        this.app.post(`${this.routeBase}`, (request: Request, response: Response) => 'hello');
    }
}
