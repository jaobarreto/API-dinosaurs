import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreateDinosaurController } from './controllers/CreateDinosaurController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    return { ok: true }
  })

  fastify.post("/dinosaur", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateDinosaurController().handle(req, res)
  })
}
