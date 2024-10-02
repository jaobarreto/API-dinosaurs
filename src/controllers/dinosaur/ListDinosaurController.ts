import { FastifyRequest, FastifyReply } from "fastify";
import { ListDinosaurService } from "../../services/dinosaur/ListDinosaurService";

interface QueryParams {
  period?: string;
  diet?: string;
  length?: string;
  weight?: string;
  page?: string;
  pageSize?: string;
}

class ListDinosaurController {
  async handle(req: FastifyRequest<{ Querystring: QueryParams }>, res: FastifyReply) {
    const listDinosaurService = new ListDinosaurService();

    const { period, diet, length, weight, page, pageSize } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const pageSizeNumber = parseInt(pageSize as string) || 10;

    const dinosaurs = await listDinosaurService.execute(
      { period, diet, length, weight },
      pageNumber,
      pageSizeNumber
    );

    res.send(dinosaurs);
  }
}

export { ListDinosaurController };
