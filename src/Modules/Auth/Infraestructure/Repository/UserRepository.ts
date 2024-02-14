import { BaseMikroORM } from '../../../../Shared/Infraestructure/Repository/BaseMikroORM';
import { UserDomain } from '../../Domain/Entities/UserDomain';
import { UserEntity } from '../Schema';

export class UserRepository extends BaseMikroORM<UserDomain>
{
    constructor()
    {
        super(UserEntity.name);
    }
}
