import { MikroORM } from '@mikro-orm/mongodb';
import * as process from 'process';
import { UserEntity } from '../../../Modules/Auth/Infraestructure/Schema/User';
import { env } from '../../Config/Enviroment/Env';

let orm: MikroORM;

export class MikroORMInstance
{
    private entities = [UserEntity];
    async initDatabase()
    {
        const connection = await MikroORM.init({
            entities: this.entities,
            dbName: env.MONGO_DB_NAME,
            clientUrl: process.env.MONGO_URL,
            allowGlobalContext: true
        });

        orm = connection.em;
    }

    static getInstance()
    {
        return orm;
    }
}

