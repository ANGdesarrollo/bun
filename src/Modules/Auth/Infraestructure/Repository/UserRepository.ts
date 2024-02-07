import { BaseMikroORM } from '../../../../Shared/Database/Repository/BaseMikroORM';
import { UserEntity } from '../Schema/User';
import { MongoEntityManager } from '@mikro-orm/mongodb';
import {User} from "../../Domain/Entities/User";

export class UserRepository extends BaseMikroORM<User>
{}
