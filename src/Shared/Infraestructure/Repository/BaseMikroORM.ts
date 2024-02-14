import { MikroORMInstance } from '../Connection/MikroORMInstance';
import { EntityManager } from '@mikro-orm/mongodb';
import { IBaseMikroORM } from './IBaseMikroORM';
import { Loaded } from '@mikro-orm/core';

export abstract class BaseMikroORM<T extends object, D extends object> implements IBaseMikroORM<T, D>
{
    protected em: EntityManager;
    protected entityName: string;
    protected constructor(entityName: string)
    {
        this.em = MikroORMInstance.getInstance().fork();
        this.entityName = entityName;
    }
    async create(payload: T): Promise<T>
    {
        const entity = this.em.create(this.entityName, payload);
        await this.em.persistAndFlush(entity);
        // @ts-ignore
        return entity;
    }

    async list(): Promise<Loaded<T>[]>
    {
        return await this.em.findAll(this.entityName);
    }

    async getOneBy(condition: Record<string, any>): Promise<T>
    {
        const entity = await this.em.findOne(this.entityName, condition) as T;
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
