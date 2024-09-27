import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDinosaurService } from "../services/CreateDinosaur";

class CreateDinosaurController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const DinosaurService = new CreateDinosaurService();

    const dinosaur = await DinosaurService.execute();

    res.send(dinosaur);
  }
}

export { CreateDinosaurController };
