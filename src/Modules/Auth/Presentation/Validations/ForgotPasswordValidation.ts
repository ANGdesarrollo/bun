import { t } from 'elysia';
export const ForgotPasswordValidation = t.Object({
    username: t.String({
        format: 'email',
        error: 'Invalid email'
    })
});
