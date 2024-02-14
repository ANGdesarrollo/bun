import { App } from './Server';

const Server = new App();

void (async() =>
{
    await Server.initDatabase();
    Server.initMiddlewares();
    Server.initRouters();
    Server.initApp();
})();

