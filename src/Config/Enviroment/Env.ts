import { cleanEnv, num, str } from 'envalid';
import { env as environment } from 'bun';
import { IEnv, STAGE } from './IEnv';

export const env: IEnv = cleanEnv(environment, {
    BUN_APP_NAME: str(),
    FRONT_END_URL: str(),
    STAGE: str({ choices: [STAGE.development, STAGE.production] }),
    PORT: num(),
    MONGO_DB_NAME: str(),
    MONGO_ROOT_USERNAME: str(),
    MONGO_ROOT_PASSWORD: str(),
    MONGO_URL: str(),
    TOKEN_EXPIRES_IN: num(),
    COOKIE_EXPIRES_IN: num(),
    TOKEN_SECRET: str(),
    HOST_NODEMAILER: str(),
    PORT_NODEMAILER: num(),
    PASSWORD_NODEMAILER: str(),
    USERNAME_NODEMAILER: str()
});
