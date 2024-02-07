import { EntityRepository, MongoEntityManager, EntityName, MongoDriver } from '@mikro-orm/mongodb';
import { User } from '../../../Modules/Auth/Domain/Entities/User';
import { RequestContext } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/mongodb';
import { MikroORMInstance } from '../Connection/MikroORMInstance';

export abstract class BaseMikroORM<T>
{
    protected em: EntityManager;
    protected entityName: string;
    protected constructor()
    {
        this.em = MikroORMInstance.getInstance().em;
    }
    async create(entity: T)
    {
        const test = this.em.create('User', entity);
        await this.em.persistAndFlush(test);
        return test;
    }
}
