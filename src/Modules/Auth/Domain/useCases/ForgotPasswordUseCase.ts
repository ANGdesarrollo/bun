import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { UserForgotPasswordPayload } from '../Payloads';
import { env } from '../../../../Config/Enviroment/Env';
import { Email } from '../../../../Shared/Domain/Models/Email';
import { templateForgotEmail } from '../../../../Shared/Helpers/templateForgotEmail';
import { JWToken } from '../Models/JWToken';


export class ForgotPasswordUseCase extends UserRepository
{
    private userRepository: UserRepository;
    constructor()
    {
        super();
        this.userRepository = new UserRepository();
    }

    public async handle(payload: UserForgotPasswordPayload)
    {
        const token = JWToken.setJWT({
            username: payload.username
        });
        const link = `${env.FRONT_END_URL}/${token}`;
        await Email.createTransport(templateForgotEmail(payload.username, link));
    }
}
