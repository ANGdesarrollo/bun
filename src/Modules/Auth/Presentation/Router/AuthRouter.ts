import Elysia from 'elysia';
import { AuthController } from '../Controller/AuthController';
import { RegisterBodyValidation } from '../Validations/RegisterBodyValidation';
import { LoginBodyValidation } from '../Validations/LoginBodyValidation';
import { AuthValidation } from '../../../../Shared/Presentation/Validations/AuthValidation';

export class AuthRouter
{
    app: Elysia;
    constructor(app: Elysia)
    {
        this.app = app;
    }

    public start()
    {
        this.app.group('/api/auth', (app) =>
            app
                .post('/register', AuthController.create, {
                    body: RegisterBodyValidation
                })
                .post('/login', AuthController.login, {
                    body: LoginBodyValidation
                })
                .get('/forgot-password/:username', AuthController.forgotPassword)
                .get('', AuthController.list, {
                    cookie: AuthValidation
                })
                .put('/reset-password', AuthController.resetPassword)
                .get('/me', AuthController.getMe, {
                    cookie: AuthValidation
                })
                .get('/refresh-token', AuthController.refreshCookie, {
                    cookie: AuthValidation
                })
        )
    }
}
