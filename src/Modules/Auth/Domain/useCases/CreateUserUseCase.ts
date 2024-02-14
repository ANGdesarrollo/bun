import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { User } from '../Entities/User';
import { UserRegisterPayload } from '../Payloads';

export class CreateUserUseCase
{
    private repository: UserRepository;
    constructor()
    {
        this.repository = new UserRepository();
    }

    async execute(payload: UserRegisterPayload)
    {
        payload.password = await Bun.password.hash(payload.password, {
            algorithm: 'bcrypt',
            cost: 4
        });

        const user = new User({
            enable: false,
            password: payload.password,
            username: payload.username,
            role: payload.role
        })

        return this.repository.create(payload);
    }
}
