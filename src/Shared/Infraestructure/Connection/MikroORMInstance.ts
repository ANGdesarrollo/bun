import { EntityManager, MikroORM } from '@mikro-orm/mongodb';
import { UserEntity } from '../../../Modules/Auth/Infraestructure/Schema/User';
import { env } from '../../../Config/Enviroment/Env';
import { IMikroORMInstance } from './IMikroORMInstance';

let orm: EntityManager;

export class MikroORMInstance implements IMikroORMInstance
{
    private entities = [UserEntity];
    async initDatabase()
    {
        const connection = await MikroORM.init({
            entities: this.entities,
            dbName: env.MONGO_DB_NAME,
            clientUrl: env.MONGO_URL,
            allowGlobalContext: true,
            ensureIndexes: true
        });

        orm = connection.em as EntityManager;
    }
    static getInstance()
    {
        return orm;
    }
}

