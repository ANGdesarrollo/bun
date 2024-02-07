import { EntityRepository, MongoEntityManager, EntityName, MongoDriver } from '@mikro-orm/mongodb';
import { User } from '../../../Modules/Auth/Domain/Entities/User';
import { RequestContext } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/mongodb';
import { MikroORMInstance } from '../Connection/MikroORMInstance';

export abstract class BaseMikroORM<T extends Object>
{
    protected em: EntityManager;
    protected entityName: string;
    constructor(entityName: string)
    {
        this.em = MikroORMInstance.getInstance();
        this.entityName = entityName;
    }
    async create(payload: T)
    {
        const entity = this.em.create(this.entityName, payload);
        await this.em.persistAndFlush(entity);
        return entity;
    }
}
