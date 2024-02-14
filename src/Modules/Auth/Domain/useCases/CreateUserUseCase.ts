import { UserRegisterPayload } from '../Payloads';
import { UserRepository } from '../../Infraestructure/Repository/UserRepository';
import { v4 as uuidv4 } from 'uuid';
import { UserDomain } from '../Entities/UserDomain';

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

        const user: UserDomain = {
            _id: uuidv4(),
            username: payload.username,
            password: payload.password,
            role: payload.role,
            enable: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return this.repository.create(user);
    }
}
