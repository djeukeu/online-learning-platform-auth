import { createServer } from 'http';

import config from 'src/config';
import { app } from 'src/services/express';
import log from 'src/logger';
import userRouter from './routes/user';
import authRouter from './routes/auth';
import { Prisma } from './services/prisma';
import { databaseHealthcheck, serverHealth } from './routes/healthcheck';

const server = async () => {
    const httpServer = createServer(app);

    await Prisma.start();

    app.get('/health', serverHealth);
    app.get('/db-health', databaseHealthcheck);
    app.use('/api/auth', authRouter);
    app.use('/api/user', userRouter);

    new Promise<void>((resolve) =>
        httpServer.listen({ port: config.port }, resolve)
    )
        .then(() => {
            log.info(
                `🚀 ${config.app_name} Service running on port: ${config.port}`
            );
        })
        .catch((err) => {
            log.error(err);
        });
};

server();
