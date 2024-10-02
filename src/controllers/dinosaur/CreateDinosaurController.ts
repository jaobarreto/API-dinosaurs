import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDinosaurService } from "../../services/dinosaur/CreateDinosaurService";

class CreateDinosaurController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { name, period, diet, length, weight, description } = req.body as {
      name: string;
      period: string;
      diet: string;
      length: number;
      weight: number;
      description: string;
    };

    const DinosaurService = new CreateDinosaurService();
    const dinosaur = await DinosaurService.execute({
      name,
      period,
      diet,
      length,
      weight,
      description,
    });

    res.send(dinosaur);
  }
}

export { CreateDinosaurController };
