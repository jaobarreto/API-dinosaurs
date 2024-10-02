import prismaClient from "../../prisma";

interface UpdateDinosaurProps {
  name?: string;
  period?: string;
  diet?: string;
  length?: number;
  weight?: number;
  description?: string;
}

class UpdateDinosaurService {
  async execute(id: string, data: UpdateDinosaurProps) {
    const dinosaur = await prismaClient.dinosaur.findUnique({
      where: { id },
    });

    if (!dinosaur) {
      throw new Error("Dinosaur not found");
    }

    const updatedDinosaur = await prismaClient.dinosaur.update({
      where: { id },
      data,
    });

    return updatedDinosaur;
  }
}

export { UpdateDinosaurService };
