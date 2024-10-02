import prismaClient from "../../prisma";

interface UpdateUserProps {
  email?: string;
  password?: string;
  role?: string;
}

class UpdateUserService {
  async execute(id: string, data: UpdateUserProps) {
    const user = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await prismaClient.user.update({
      where: { id },
      data,
    });

    return updatedUser;
  }
}

export { UpdateUserService };
