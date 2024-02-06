import Elysia from "elysia";
import { env } from "./Config/Enviroment/Env";
import {MikroORMConnection} from "./Database/MikroORMConnection";

export class App {
    app: Elysia
    database: MikroORMConnection
    constructor() {
        this.app = new Elysia();
        this.database = new MikroORMConnection();
    }

    public async initDatabase() {
        await this.database.initDatabase();
    }
    public initApp() {
        console.log(
            `🦊 Elysia is running at ${env.PORT}`
        );
    }
}



