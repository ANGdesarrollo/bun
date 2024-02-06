import {MikroORM} from "@mikro-orm/mongodb";
import {env} from "../Config/Enviroment/Env";
import * as process from "process";
import {UserSchema} from "../Modules/Auth/Repository/Schema/User";

export class MikroORMConnection {
    async initDatabase() {
        await MikroORM.init({
            entities: [UserSchema],
            dbName: env.MONGO_DB_NAME,
            clientUrl: process.env.MONGO_URL,
        });
    }
}
