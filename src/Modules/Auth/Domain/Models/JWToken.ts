import { env } from 'bun';

interface IJWT
{
    data: {
        username: string;
    }
}
export class JWToken
{
    static async setJWT(data: object, jwt): Promise<string>
    {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + env.TOKEN_EXPIRES_IN,
            value: data,
            maxAge: env.TOKEN_EXPIRES_IN,
            path: '/',
            httpOnly: true
        });
    }

    // static verifyJWT(accessToken: string): IJWT
    // {
    //     return <IJWT>jwt.verify(accessToken, env.NODE_TOKEN_SECRET);
    // }
}
