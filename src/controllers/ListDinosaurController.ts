import { FastifyRequest, FastifyReply } from "fastify";
import { ListDinosaurService } from "../services/ListDinosaurService";

class listDinosaurController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const listDinosaurService = new ListDinosaurService();

    const dinosaurs = await listDinosaurService.execute();

    res.send(dinosaurs)
  }
}

export { listDinosaurController };
