import Elysia, { Context, t } from 'elysia';
import { AuthController } from '../Controller/AuthController';
import { RegisterBodyValidation } from '../Validations/RegisterBodyValidation';
import { LoginBodyValidation } from '../Validations/LoginBodyValidation';
import { AuthValidation, privateRoute } from '../../../../Shared/Presentation/Validations/AuthValidation';
import { IRole } from '../../Domain/Entities/IRole';

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
        this.app.post(`${this.routeBase}/forgot-password`, AuthController.forgotPassword)
        this.app.get(`${this.routeBase}`, AuthController.list, {
            cookie: AuthValidation,
            // @ts-ignore
            beforeHandle: async(ctx) => await privateRoute(ctx)
        });
    }
}
