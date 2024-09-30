import prismaClient from "../prisma";

class ListDinosaurService {
  async execute() {
    const dinosaurs = await prismaClient.dinosaur.findMany();

    return dinosaurs;
  }
}

export { ListDinosaurService };
