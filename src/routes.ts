import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreateDinosaurController } from './controllers/CreateDinosaurController'
import { listDinosaurController } from './controllers/ListDinosaurController'
import { deleteDinosaurController } from './controllers/DeleteDinosaurController'
import { listDinosaurByIdController } from './controllers/ListDinosaurByIdController'
import { updateDinosaurController } from './controllers/UpdateDinosaurController'
import { CreateUserController } from './controllers/CreateUserController'
import { listUserController } from './controllers/ListUserController'
import { deleteUserController } from './controllers/DeleteUserController'
import { updateUserController } from './controllers/UpdateUserController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    return ("welcome to the dinosaur API")
  })

  fastify.get("/dinosaurs", async (req: FastifyRequest, res: FastifyReply) => {
    return new listDinosaurController().handle(req, res)
  })

  fastify.get("/dinosaurs/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new listDinosaurByIdController().handle(req, res)
  })

  fastify.post("/dinosaur", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateDinosaurController().handle(req, res)
  })

  fastify.delete("/dinosaur/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new deleteDinosaurController().handle(req, res);
  });

  fastify.put("/dinosaur/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new updateDinosaurController().handle(req, res);
  });

  fastify.post("/user", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateUserController().handle(req, res);
  });

  fastify.get("/users", async (req: FastifyRequest, res: FastifyReply) => {
    return new listUserController().handle(req, res)
  });

  fastify.delete("/user/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new deleteUserController().handle(req, res);
  });

  fastify.put("/user/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new updateUserController().handle(req, res);
  });
}
