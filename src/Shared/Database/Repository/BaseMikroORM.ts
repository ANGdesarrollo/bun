import {MikroORM, Entity, EntityRepository, MongoEntityManager} from "@mikro-orm/mongodb";
import {MikroORMInstance} from "../Connection/MikroORMInstance";


export class BaseMikroORM<T extends Entity> {
    protected repository: EntityRepository<T>
    protected mikroORM: MikroORM<MongoEntityManager>;
    constructor(entity: T) {
        this.mikroORM = MikroORMInstance.getInstance()
    }

    async create() {
        thi
    }


}
