import { UserPayload } from '../Payloads/UserPayload';
import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { User } from '../Entities/User';
import { UserEntity } from '../../Infraestructure/Schema/User';

export class LoginUserUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository(UserEntity.name);
    }

    async execute(body: UserPayload)
    {
        const user = await this.repository.getOneBy({
            username: body.username
        });

        const isPasswordOk = await this.compareHash({
            dbPassword: user.password,
            payloadPassword: body.password
        });

        if (!isPasswordOk)
        {
            throw new Error();
        }

        return user;
    }

    private async compareHash(payload: {
        payloadPassword: string,
        dbPassword: string
    })
    {
        return await Bun.password.verify(payload.payloadPassword, payload.dbPassword);
    }
}
