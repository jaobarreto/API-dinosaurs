import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateDinosaurController } from '../controllers/CreateDinosaurController';
import { ListDinosaurController } from '../controllers/ListDinosaurController';
import { deleteDinosaurController } from '../controllers/DeleteDinosaurController';
import { listDinosaurByIdController } from '../controllers/ListDinosaurByIdController';
import { updateDinosaurController } from '../controllers/UpdateDinosaurController';
import { authMiddleware } from '../middlewares/authMiddleware';

export async function dinosaurRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    return "Welcome to the dinosaur API";
  });

  fastify.get("/dinosaurs", async (req: FastifyRequest<{ Querystring: { period?: string; diet?: string; length?: string; weight?: string; page?: string; pageSize?: string; } }>, res: FastifyReply) => {
    return new ListDinosaurController().handle(req, res);
  });

  fastify.get("/dinosaurs/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new listDinosaurByIdController().handle(req, res);
  });

  fastify.post("/dinosaur", { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateDinosaurController().handle(req, res);
  });

  fastify.delete("/dinosaur/:id", { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    return new deleteDinosaurController().handle(req, res);
  });

  fastify.put("/dinosaur/:id", { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    return new updateDinosaurController().handle(req, res);
  });
}
