import prismaClient from "../../prisma";

class ListDinosaurByIdService {
  async execute(id: string) {
    const dinosaur = await prismaClient.dinosaur.findUnique({
      where: { id },
    });

    if (!dinosaur) {
      throw new Error("Dinosaur not found");
    }

    return dinosaur;
  }
}

export { ListDinosaurByIdService };
