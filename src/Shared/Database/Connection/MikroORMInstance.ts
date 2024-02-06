import { MikroORM } from "@mikro-orm/core";
import {UserSchema} from "../../../Modules/Auth/Repository/Schema/User";
import {env} from "../../Config/Enviroment/Env";

export class MikroORMInstance {
    private static _instance: MikroORM | null = null;

    async initDatabase() {
        if (!MikroORMInstance._instance) {
            MikroORMInstance._instance = await MikroORM.init({
                entities: [UserSchema],
                dbName: env.MONGO_DB_NAME,
                clientUrl: process.env.MONGO_URL,
            });
        }
    }

    static getInstance(): MikroORM {
        if (!MikroORMInstance._instance) {
            throw new Error("MikroORM is not initialized yet");
        }
        return MikroORMInstance._instance;
    }
}
