import { t } from 'elysia';

export const RegisterBodyValidation = t.Object({
    username: t.String({
        format: 'email',
        error: 'Invalid email'
    }),
    password: t.String({
        minLength: 8,
        maxLength: 50,
        error: 'Min length is 8 and max length is 50'
    })
});
