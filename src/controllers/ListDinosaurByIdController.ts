import { FastifyRequest, FastifyReply } from "fastify";
import { ListDinosaurByIdService } from "../services/ListDinosaurByIdService";

class listDinosaurByIdController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.params as { id: string };
    const listDinosaurByIdService = new ListDinosaurByIdService();

    try {
      const dinosaur = await listDinosaurByIdService.execute(id);
      res.send(dinosaur);
    } catch (error) {
      res.status(404).send({ error: "Dinosaur not found." });
    }
  }
}

export { listDinosaurByIdController };
