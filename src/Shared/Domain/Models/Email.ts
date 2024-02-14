import nodeMailer from 'nodemailer';
import { env } from '../../../Config/Enviroment/Env';
import { ITemplate } from './ITemplate';
export class Email
{
    static async createTransport(template: ITemplate)
    {
        try
        {
            const transporter = nodeMailer.createTransport({
                host: env.HOST_NODEMAILER,
                port: env.PORT_NODEMAILER,
                secure: true,
                auth: {
                    user: env.USERNAME_NODEMAILER,
                    pass: env.PASSWORD_NODEMAILER
                }
            });

            await transporter.verify();

            await transporter.sendMail(template);
        }
        catch (error)
        {
            throw new Error(error as string);
        }
    }
}
