import { t } from 'elysia';
import { Role } from '../../Domain/Entities/Role';

export const RegisterBodyValidation = t.Object({
    username: t.String({
        format: 'email',
        error: 'Invalid email'
    }),
    password: t.String({
        minLength: 8,
        maxLength: 50,
        error: 'Min length is 8 and max length is 50'
    }),
    role: t.Enum(Role, {
        default: Role.user
    })
});
