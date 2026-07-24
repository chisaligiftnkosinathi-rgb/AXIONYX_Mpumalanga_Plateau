import fastify from 'fastify';
import pino from 'pino';
import { laboratoryRoutes } from './routes/laboratory';

const server = fastify({
  logger: pino({ level: 'info' })
});

// Mount Routes
server.register(laboratoryRoutes, { prefix: '/laboratory' });

server.get('/health', async () => {
  return { status: 'healthy', platform: 'AXIONYX Scientific Knowledge Platform' };
});

const start = async () => {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;
    await server.listen({ port, host: '0.0.0.0' });
    server.log.info(`[AXIONYX] Scientific Knowledge Platform listening on port ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
