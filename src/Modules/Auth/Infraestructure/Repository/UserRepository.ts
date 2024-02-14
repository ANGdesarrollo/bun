import { BaseMikroORM } from '../../../../Shared/Infraestructure/Repository/BaseMikroORM';
import { UserDomain } from '../../Domain/Entities/UserDomain';
import { UserEntity } from '../Schema';
import { UserRegisterPayload } from '../../Domain/Payloads';

export class UserRepository extends BaseMikroORM<UserDomain, UserRegisterPayload>
{
    constructor()
    {
        super(UserEntity.name);
    }
}
