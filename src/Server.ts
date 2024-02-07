import Elysia from "elysia";
import { env } from "./Shared/Config/Enviroment/Env";
import { cors } from '@elysiajs/cors'
import {AuthRouter} from "./Modules/Auth/Presentation/Router/AuthRouter";
import {MikroORMInstance} from "./Shared/Database/Connection/MikroORMInstance";

export class App {
    app: Elysia
    database: MikroORMInstance
    constructor() {
        this.app = new Elysia();
        this.database = new MikroORMInstance()
    }

    public initMiddlewares() {
        this.app.use(cors());
    }

    public initRouters() {
        new AuthRouter(this.app).start();
    }

    public async initDatabase() {
        return this.database.initDatabase();
    }
    public initApp() {
        this.app.listen(env.PORT)
        console.log(
            `🦊 Elysia is running at ${env.PORT}`
        );
    }
}



