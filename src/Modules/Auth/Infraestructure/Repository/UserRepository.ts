import { BaseMikroORM } from '../../../../Shared/Infraestructure/Repository/BaseMikroORM';
import { UserEntity } from '../Schema/User';
import { User } from '../../Domain/Entities/User';

export class UserRepository extends BaseMikroORM<User>
{
    constructor()
    {
        super(UserEntity.name);
    }
}
