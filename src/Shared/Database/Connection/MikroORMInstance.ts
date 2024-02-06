import { MikroORM } from "@mikro-orm/core";
import {UserSchema} from "../../../Modules/Auth/Repository/Schema/User";
import {env} from "../../Config/Enviroment/Env";

export class MikroORMInstance {

    async initDatabase() {
            return MikroORM.init({
                entities: [UserSchema],
                dbName: env.MONGO_DB_NAME,
                clientUrl: process.env.MONGO_URL,
            });
    }
}
