import {EntityRepository, MongoEntityManager, EntityName} from "@mikro-orm/mongodb";
import {User} from "../../../Modules/Auth/Domain/Entities/User";


export class BaseMikroORM<T> extends EntityRepository<T> {
    protected em: MongoEntityManager
    protected entityName: EntityName<T>
    constructor(_em: MongoEntityManager, entityName: EntityName<T>){
        super(_em, entityName);
    }


    async create(entity: User) {
        return this.em.create(this.entityName, {
            username: entity.getUsername(),
            password: entity.getPassword()
        })
    }
}
