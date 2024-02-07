import Router from 'elysia';
import {AuthController} from "../Controller/AuthController";

export class AuthRouter {
    private router: Router;

    constructor() {
        this.router = new Router();
    }
    public start() {
        this.router.get('/', () => AuthController.create)
    }
}
