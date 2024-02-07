import Elysia from "elysia";
import {AuthController} from "../Controller/AuthController";

export class AuthRouter {
    app: Elysia;
    routeBase: string;
    constructor(app: Elysia) {
        this.app = app
        this.routeBase = "/api/auth"
    }

    public start() {
        this.app.post(`${this.routeBase}`, AuthController.create);
    }
}
