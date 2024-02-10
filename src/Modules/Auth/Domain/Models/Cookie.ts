import { env } from '../../../../Config/Enviroment/Env';
import { STAGE } from '../../../../Config/Enviroment/IEnv';
export class Cookie
{
    static generateCookie(auth, accessToken: string)
    {
        void auth.set({
            secrets: env.COOKIE_SECRET,
            maxAge: env.COOKIE_EXPIRES_IN,
            httpOnly: true,
            path: './',
            secure: env.STAGE === STAGE.production,
            value: accessToken,
            replace: true
        });
    }

    // static removeCookie(ctx: Context, cookieName: string)
    // {
    //     void ctx.cookie.auth.remove({});
    // }
}
