import {EntityRepository, MongoEntityManager, EntityName, MongoDriver} from "@mikro-orm/mongodb";
import {User} from "../../../Modules/Auth/Domain/Entities/User";
import { RequestContext } from '@mikro-orm/core';
import { EntityManager } from "@mikro-orm/mongodb";

export abstract class BaseMikroORM<T> {
    protected em: EntityManager
    protected entityName: EntityName<T>
    protected constructor(_em: MongoEntityManager, entityName: EntityName<T>){
        console.log("soy request config", RequestContext.getEntityManager())
        this.em = RequestContext.getEntityManager() as EntityManager;
    }


    create = async(entity: T)=> {
        console.log("soy this em", this.em)
        return this.em.create(this.entityName, entity)
    }
}
