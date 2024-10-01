import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateDinosaurController } from '../controllers/CreateDinosaurController';
import { listDinosaurController } from '../controllers/ListDinosaurController';
import { deleteDinosaurController } from '../controllers/DeleteDinosaurController';
import { listDinosaurByIdController } from '../controllers/ListDinosaurByIdController';
import { updateDinosaurController } from '../controllers/UpdateDinosaurController';
import { authMiddleware } from '../middlewares/authMiddleware';

export async function dinosaurRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    return "Welcome to the dinosaur API";
  });

  fastify.get("/dinosaurs", async (req: FastifyRequest, res: FastifyReply) => {
    return new listDinosaurController().handle(req, res);
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
