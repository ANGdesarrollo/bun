import jwt from 'jsonwebtoken';
import { env } from '../../../../Config/Enviroment/Env';
import { Role } from '../Entities/Role';

interface DecodedJWT
{
    data: {
        username: string;
    }
}
export class JWToken
{
    static setJWT(payload: {
        username: string;
        role?: Role
    }): string
    {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + env.TOKEN_EXPIRES_IN,
            path: '/',
            data: {
                ...payload,
                createdAt: new Date()
            }
        }, env.TOKEN_SECRET);
    }

    static verifyJWT(accessToken: string): DecodedJWT
    {
        return <DecodedJWT>jwt.verify(accessToken, env.TOKEN_SECRET);
    }
}
