import { t } from 'elysia';
import { IRole } from '../../../Modules/Auth/Domain/Entities/IRole';

export const AuthValidation = t.Cookie({
    auth: t.String({
        error: 'Unauthorized'
    })
});

export const privateRoute = async({ jwt, cookie: { auth } }) =>
{
    const user = await jwt.verify(auth.value);

    if (user.value.role !== IRole.admin && IRole.superAdmin)
    {
        throw new Error('Unauthorized');
    }
};


