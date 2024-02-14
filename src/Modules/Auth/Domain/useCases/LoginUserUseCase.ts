import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { UserLoginPayload } from '../Payloads';
import { JWToken } from '../Models/JWToken';
import { Cookie } from '../Models/Cookie';

export class LoginUserUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository();
    }

    async execute(body: UserLoginPayload)
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
            throw new Error('Error at logging');
        }

        const authToken = JWToken.setJWT({
            username: user.username,
            role: user.role
        });

        const  cookie = Cookie.generateCookie('auth', authToken);

        return {
            user,
            cookie
        };
    }

    private async compareHash(payload: {
        payloadPassword: string,
        dbPassword: string
    })
    {
        return await Bun.password.verify(payload.payloadPassword, payload.dbPassword);
    }
}
