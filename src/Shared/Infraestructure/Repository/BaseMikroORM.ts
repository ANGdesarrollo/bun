import { MikroORMInstance } from '../Connection/MikroORMInstance';
import { EntityManager, MongoDriver, MongoEntityManager } from '@mikro-orm/mongodb';
import { IBaseMikroORM } from './IBaseMikroORM';

export abstract class BaseMikroORM<T extends object> implements IBaseMikroORM<T>
{
    protected em: EntityManager;
    protected entityName: string;
    protected constructor(entityName: string)
    {
        this.em = MikroORMInstance.getInstance();
        this.entityName = entityName;
    }
    async create(payload: T): Promise<T>
    {
        const entity = this.em.create(this.entityName, payload) as T;
        await this.em.fork().persistAndFlush(entity);

        return entity;
    }

    async list(): Promise<T[]>
    {
        return this.em.findAll(this.entityName);
    }

    async getOneBy(condition: Record<string, any>): Promise<T>
    {
        const entity = await this.em.fork().findOne(this.entityName, condition) as T;

        if (!entity)
        {
            throw new Error(this.entityName);
        }

        return entity;
    }

    async update(entity: T): Promise<T>
    {
        await this.em.persistAndFlush(entity);
        return entity;
    }
}
