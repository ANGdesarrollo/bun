import {MikroORM} from "@mikro-orm/mongodb";
import * as process from "process";
import {UserEntity} from "../../../Modules/Auth/Infraestructure/Schema/User";
import {env} from "../../Config/Enviroment/Env";

export class MikroORMInstance {
    private mikroORM: any;
     async initDatabase() {
        this.mikroORM = await MikroORM.init({
            entities: [UserEntity],
            dbName: env.MONGO_DB_NAME,
            clientUrl: process.env.MONGO_URL,
        });

        return this.mikroORM;
    }
}
