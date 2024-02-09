import {Context} from "elysia";
import { env } from "../../../../Config/Enviroment/Env";
export class Cookie
{
    static generateCookie(ctx: Context, cookieName: string, accessToken: string)
    {
        void ctx.cookie.auth.set( {
            secure: env.STAGE === 'prod',
            signed: true,
            httpOnly: true,
            maxAge: env.COOKIE_EXPIRES_IN,
            secrets: accessToken,
            value: accessToken

        });
    }

    static removeCookie(ctx: Context, cookieName: string)
    {
        void ctx.cookie.auth.remove({});
    }
}
