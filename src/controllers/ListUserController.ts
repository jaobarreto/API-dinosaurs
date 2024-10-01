import { FastifyRequest, FastifyReply } from "fastify";
import { ListUserService } from "../services/ListUserService";

class listUserController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const listUserService = new ListUserService();

    const users = await listUserService.execute();

    res.send(users)
  }
}

export { listUserController };
