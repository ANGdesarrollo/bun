import {BaseMikroORM} from "../../../../Shared/Database/Repository/BaseMikroORM";
import {UserEntity} from "../Schema/User";
import {MongoEntityManager} from "@mikro-orm/mongodb";

export class UserRepository extends BaseMikroORM<UserEntity> {}
