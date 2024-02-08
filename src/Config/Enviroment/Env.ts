import { cleanEnv, num, str } from 'envalid';
import { env as environment } from 'bun';

type Env = {
    BUN_APP_NAME: string;
    STAGE: string;
    PORT: number;
    MONGO_DB_NAME: string;
    MONGO_ROOT_USERNAME: string;
    MONGO_ROOT_PASSWORD: string;
    MONGO_URL: string;
}
export const env: Env = cleanEnv(environment, {
    BUN_APP_NAME: str(),
    STAGE: str({ choices: ['dev', 'prod'] }),
    PORT: num(),
    MONGO_DB_NAME: str(),
    MONGO_ROOT_USERNAME: str(),
    MONGO_ROOT_PASSWORD: str(),
    MONGO_URL: str()
});
