import { MikroORMInstance } from '../Connection/MikroORMInstance';
import {EntityManager} from "@mikro-orm/mongodb";

export abstract class BaseMikroORM<T extends object>
{
    protected em: EntityManager;
    protected entityName: string;
    constructor(entityName: string)
    {
        this.em = MikroORMInstance.getInstance().fork() as EntityManager
        this.entityName = entityName;
    }
    async create(payload: T)
    {
        const entity = this.em.create(this.entityName, payload);
        await this.em.persistAndFlush(entity);
        return entity;
    }

    async list()
    {
        return this.em.findAll(this.entityName);
    }

    async findById(id: string) {
        return this.em.findOneOrFail(this.entityName, {
            _id: id
        })
    }

    async getOneBy(condition: Record<string, any>)
    {
        const entity = await this.em.findOne(this.entityName, condition);

        if (!entity)
        {
            throw new Error(this.entityName);
        }

        return entity;
    }
}
