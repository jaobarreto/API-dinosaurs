import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteDinosaurService } from "../../services/dinosaur/DeleteDinosaurService";

class deleteDinosaurController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const dinosaurService = new DeleteDinosaurService();
    const { id } = req.params as { id: string };
    try {
      const dinosaur = await dinosaurService.execute({ id });
      res.send(dinosaur);
    } catch (error) {
      res.status(400).send({ error: "Dinosaur not found." });
    }
  }
}

export { deleteDinosaurController };
