import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { RegisterSampleCommandSchema } from '../modules/laboratory/samples/commands/RegisterSampleCommand';
import { RegisterSampleHandler } from '../modules/laboratory/samples/handlers/RegisterSampleHandler';

export const laboratoryRoutes: FastifyPluginAsync = async (server: FastifyInstance) => {
  
  // Handlers
  const registerSampleHandler = new RegisterSampleHandler();

  server.post('/samples/register', async (request, reply) => {
    try {
      const command = RegisterSampleCommandSchema.parse(request.body);
      const result = await registerSampleHandler.handle(command);
      return reply.status(201).send(result);
    } catch (error: any) {
      server.log.error(error);
      return reply.status(400).send({ error: 'Validation Error', details: error.errors });
    }
  });

  // Future Routes mapping to their specific CQRS handlers
  server.post('/instruments/calibrate', async (request, reply) => {
    return reply.status(202).send({ status: 'Calibration Command Dispatched' });
  });

  server.post('/measurements/capture', async (request, reply) => {
    return reply.status(202).send({ status: 'Measurement Capture Command Dispatched' });
  });

};
