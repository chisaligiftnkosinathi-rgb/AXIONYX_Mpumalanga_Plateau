import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { ProjectionEngine } from '@axionyx/projection-engine/src/ProjectionEngine';
import { Subject } from 'rxjs';

export async function setupLiveApi(
  fastify: FastifyInstance,
  projectionEngine: ProjectionEngine,
  updateStream: Subject<void>
) {
  fastify.get('/live/dashboard', (req: FastifyRequest, reply: FastifyReply) => {
    reply.raw.setHeader('Content-Type', 'text/event-stream');
    reply.raw.setHeader('Cache-Control', 'no-cache');
    reply.raw.setHeader('Connection', 'keep-alive');
    
    // Send initial state
    const sendState = () => {
      try {
        const instrumentState = projectionEngine.getProjection('Instrument');
        reply.raw.write(`data: ${JSON.stringify({ type: 'DASHBOARD_UPDATE', payload: instrumentState })}\n\n`);
      } catch (e) {
        console.error('Error fetching projection:', e);
      }
    };
    
    sendState();
    
    // Subscribe to future updates triggered by the EventBus
    const subscription = updateStream.subscribe(() => {
      sendState();
    });
    
    req.raw.on('close', () => {
      subscription.unsubscribe();
      reply.raw.end();
    });
  });
}
