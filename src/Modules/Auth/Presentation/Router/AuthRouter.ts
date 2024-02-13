import Elysia, { Context, t } from 'elysia';
import { AuthController } from '../Controller/AuthController';
import { RegisterBodyValidation } from '../Validations/RegisterBodyValidation';
import { LoginBodyValidation } from '../Validations/LoginBodyValidation';
import { AuthValidation, privateRoute } from '../../../../Shared/Presentation/Validations/AuthValidation';
import { Role } from '../../Domain/Entities/Role';

export class AuthRouter
{
    app: Elysia;
    routeBase: string;
    constructor(app: Elysia)
    {
        this.app = app;
        this.routeBase = '/api/auth';
    }

    public start()
    {
        this.app.post(`${this.routeBase}/register`, AuthController.create, {
            body: RegisterBodyValidation
        });
        this.app.post(`${this.routeBase}/login`, AuthController.login, {
            body: LoginBodyValidation
        });
        this.app.post(`${this.routeBase}/forgot-password`, AuthController.forgotPassword);
        this.app.get(`${this.routeBase}`, AuthController.list, {
            cookie: AuthValidation,
            // @ts-ignore
            beforeHandle: async(ctx) => await privateRoute(ctx)
        });
        this.app.put(`${this.routeBase}/reset-password`, AuthController.resetPassword);
        this.app.get(`${this.routeBase}/me`, AuthController.getMe, {
            cookie: AuthValidation,
            beforeHandle: () =>
            {}
        });
        this.app.get(`${this.routeBase}/refresh-token`,AuthController.refreshCookie, {
            cookie: AuthValidation
        })
    }
}
