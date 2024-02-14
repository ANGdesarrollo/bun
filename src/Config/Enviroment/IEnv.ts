export type IEnv = {
    BUN_APP_NAME: string;
    FRONT_END_URL: string;
    STAGE: STAGE;
    PORT: number;
    MONGO_DB_NAME: string;
    MONGO_ROOT_USERNAME: string;
    MONGO_ROOT_PASSWORD: string;
    MONGO_URL: string;
    TOKEN_EXPIRES_IN: number;
    COOKIE_EXPIRES_IN: number;
    TOKEN_SECRET: string;
    HOST_NODEMAILER: string;
    PORT_NODEMAILER: number;
    PASSWORD_NODEMAILER: string;
    USERNAME_NODEMAILER: string;
}

export enum STAGE  {
    production = 'prod',
    development = 'dev'
}
