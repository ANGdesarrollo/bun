import { t } from 'elysia';
import { Role } from '../../../Modules/Auth/Domain/Entities/Role';

export const AuthValidation = t.Cookie({
    auth: t.String({
        error: 'Unauthorized'
    })
});

export const privateRoute = async({ jwt, cookie: { auth } }) =>
{
    const user = await jwt.verify(auth.value);

    if (user.value.role !== Role.admin && Role.superAdmin)
    {
        throw new Error('Unauthorized');
    }
};


