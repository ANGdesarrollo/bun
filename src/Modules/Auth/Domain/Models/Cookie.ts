import { env } from '../../../../Config/Enviroment/Env';
import { STAGE } from '../../../../Config/Enviroment/IEnv';
import cookie from 'cookie';

export class Cookie
{
    static generateCookie(cookieName: string, jwtToken: string)
    {
        const cookieOptions = {
            maxAge: env.COOKIE_EXPIRES_IN,
            httpOnly: true,
            path: '/',
            secure: env.STAGE === STAGE.production,
            value: jwtToken,
            replace: true,
            sign: ['auth']
        };

        return cookie.serialize(cookieName, jwtToken, cookieOptions);
    }
}
