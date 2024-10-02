import prismaClient from "../../prisma";

class ListDinosaurService {
  async execute({ period, diet, length, weight }: { period?: string; diet?: string; length?: string; weight?: string }, page: number, pageSize: number) {
    const filters: any = {};

    if (diet) {
      filters.diet = diet;
    }

    if (period) {
      filters.period = period;
    }

    if (length) {
      filters.length = {
        gte: parseFloat(length),
      };
    }

    if (weight) {
      filters.weight = {
        gte: parseFloat(weight),
      };
    }

    const dinosaurs = await prismaClient.dinosaur.findMany({
      where: filters,
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return dinosaurs;
  }
}

export { ListDinosaurService };
