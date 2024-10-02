import prismaClient from "../../prisma";

interface CreateDinosaurProps {
  name: string;
  period: string;
  diet: string;
  length: number;
  weight: number;
  description: string;
}

class CreateDinosaurService {
  async execute({
    name,
    period,
    diet,
    length,
    weight,
    description,
  }: CreateDinosaurProps) {
    if (!name || !period || !diet || !length || !weight || !description) {
      throw new Error("All fields are required");
    }

    const dinosaur = await prismaClient.dinosaur.create({
      data: {
        name,
        period,
        diet,
        length,
        weight,
        description,
      },
    });

    return dinosaur;
  }
}

export { CreateDinosaurService };
