import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserSevice";

class CreateUserController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { email, password, role } = req.body as {
      email: string;
      password: string;
      role: string;
    };

    const UserService = new CreateUserService();
    const user = await UserService.execute({
      email,
      password,
      role
    });

    res.send(user);
  }
}

export { CreateUserController };
