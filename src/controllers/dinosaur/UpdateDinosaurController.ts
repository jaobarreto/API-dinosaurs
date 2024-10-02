import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateDinosaurService } from "../../services/dinosaur/UpdateDinosaurService";

class updateDinosaurController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.params as { id: string };
    const { name, period, diet, length, weight, description } = req.body as {
      name?: string;
      period?: string;
      diet?: string;
      length?: number;
      weight?: number;
      description?: string;
    };

    const updateDinosaurService = new UpdateDinosaurService();

    try {
      const updatedDinosaur = await updateDinosaurService.execute(id, {
        name,
        period,
        diet,
        length,
        weight,
        description,
      });
      res.send(updatedDinosaur);
    } catch (error) {
      res.status(404).send({ message: "Dinosaur not found." });
    }
  }
}

export { updateDinosaurController };
