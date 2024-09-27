import prismaClient from "../prisma";

class CreateDinosaurService {
  async execute() {
    console.log("rota rodando");

    return { ok: true };
  }
}

export { CreateDinosaurService };
