import prismaClient from "../../prisma";
interface DeleteDinosaurProps {
  id: string;
}

class DeleteDinosaurService {
  async execute({ id }: DeleteDinosaurProps) {
    if (!id) {
      throw new Error("Id not found.");
    }

    const findDinosaur = await prismaClient.dinosaur.findFirst({
      where: {
        id: id,
      },
    });

    if (!findDinosaur) {
      throw new Error("Dinosaur not found.");
    }

    await prismaClient.dinosaur.delete({
      where: {
        id: findDinosaur.id,
      },
    });

    return { message: "Dinosaur deleted." };
  }
}

export { DeleteDinosaurService };
