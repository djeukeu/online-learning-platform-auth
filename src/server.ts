import { createServer } from 'http';

import config from 'src/config';
import healthcheck from 'src/routes/healthcheck';
import { app } from 'src/services/express';

const startServer = async () => {
    const httpServer = createServer(app);

    app.get('/health', healthcheck);

    new Promise<void>((resolve) =>
        httpServer.listen({ port: config.port }, resolve)
    )
        .then(() => {
            console.log(
                `🚀 ${config.app_name} Service running on port: ${config.port}`
            );
        })
        .catch((err) => {
            console.log(err);
        });
};

startServer();
