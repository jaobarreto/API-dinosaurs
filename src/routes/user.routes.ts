import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserController } from '../controllers/user/CreateUserController';
import { listUserController } from '../controllers/user/ListUserController'
import { deleteUserController } from '../controllers/user/DeleteUserController'
import { updateUserController } from '../controllers/user/UpdateUserController'
import { handleLogin } from '../controllers/user/UserLoginController';

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
