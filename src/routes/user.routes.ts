import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserController } from '../controllers/CreateUserController'
import { listUserController } from '../controllers/ListUserController'
import { deleteUserController } from '../controllers/DeleteUserController'
import { updateUserController } from '../controllers/UpdateUserController'

export async function userRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/users", async (req: FastifyRequest, res: FastifyReply) => {
    return new listUserController().handle(req, res);
  });

  fastify.post("/user", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateUserController().handle(req, res);
  });

  fastify.put("/user/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new updateUserController().handle(req, res);
  });

  fastify.delete("/user/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new deleteUserController().handle(req, res);
  });
}
