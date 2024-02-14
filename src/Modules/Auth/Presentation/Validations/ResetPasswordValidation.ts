import { t } from 'elysia';

export const ResetPasswordValidation = t.Object({
    jwt: t.String({
        format: 'string',
        error: 'Invalid email'
    }),
    password: t.String({
        minLength: 8,
        maxLength: 50,
        error: 'Min length is 8 and max length is 50'
    })
});
