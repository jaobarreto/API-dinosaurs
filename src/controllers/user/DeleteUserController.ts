import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class deleteUserController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const userService = new DeleteUserService();
    const { id } = req.params as { id: string };
    try {
      const user = await userService.execute({ id });
      res.send(user);
    } catch (error) {
      res.status(400).send({ error: "User not found." });
    }
  }
}

export { deleteUserController };
