import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserController } from '../controllers/CreateUserController';
import { listUserController } from '../controllers/ListUserController'
import { deleteUserController } from '../controllers/DeleteUserController'
import { updateUserController } from '../controllers/UpdateUserController'
import { handleLogin } from '../controllers/UserLoginController';

interface LoginRequestBody {
  email: string;
  password: string;
}

export async function userRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/users", async (req: FastifyRequest, res: FastifyReply) => {
    return new listUserController().handle(req, res);
  });

  fastify.post("/users", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateUserController().handle(req, res);
  });

  fastify.put("/users/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new updateUserController().handle(req, res);
  });

  fastify.delete("/users/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new deleteUserController().handle(req, res);
  });

  fastify.post("/login", async (req: FastifyRequest<{ Body: LoginRequestBody }>, res: FastifyReply) => {
    return handleLogin(req, res);
  });
}
