import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { UserResetPasswordPayload } from '../Payloads';
import { User } from '../Entities/User';


export class ResetPasswordUserUseCase extends UserRepository
{
    private userRepository: UserRepository;
    constructor()
    {
        super();
        this.userRepository = new UserRepository();
    }

    public async handle(payload: UserResetPasswordPayload)
    {
        const user = await this.userRepository.getOneBy({
            username: payload.username
        });

        if (!user)
        {
            throw new Error('Invalid User');
        }

        user.password = await Bun.password.hash(payload.password, {
            algorithm: 'bcrypt',
            cost: 4
        });

        return this.userRepository.update(<User>user);
    }
}
