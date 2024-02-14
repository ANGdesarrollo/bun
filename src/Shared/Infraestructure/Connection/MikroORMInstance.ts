import { EntityManager, MikroORM, MongoDriver, ReflectMetadataProvider } from '@mikro-orm/mongodb';
import { env } from '../../../Config/Enviroment/Env';
import { IMikroORMInstance } from './IMikroORMInstance';
import { UserEntity } from '../../../Modules/Auth/Infraestructure/Schema';

let orm: EntityManager;

export class MikroORMInstance implements IMikroORMInstance
{
    async initDatabase()
    {
        const connection = await MikroORM.init({
            driver: MongoDriver,
            entities: [UserEntity],
            metadataProvider: ReflectMetadataProvider,
            dbName: env.MONGO_DB_NAME,
            clientUrl: env.MONGO_URL,
            allowGlobalContext: true,
            ensureIndexes: true,
            tsNode: true,
            debug: true
        });

        orm = connection.em as EntityManager;
    }
    static getInstance()
    {
        return orm;
    }
}

