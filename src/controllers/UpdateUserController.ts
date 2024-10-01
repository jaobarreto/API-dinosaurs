import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserService } from "../services/UpdateUserService";

class updateUserController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.params as { id: string };
    const { email, password, role } = req.body as {
      email?: string;
      password?: string;
      role?: string;
    };

    const updateUserService = new UpdateUserService();

    try {
      const updateUser = await updateUserService.execute(id, {
        email,
        password,
        role,
      });
      res.send(updateUser);
    } catch (error) {
      res.status(404).send({ message: "User not found." });
    }
  }
}

export { updateUserController };
