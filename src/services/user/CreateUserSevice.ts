import prismaClient from "../../prisma";

interface CreateUserProps {
  email: string;
  password: string;
  role: string;
}

class CreateUserService {
  async execute({
    email,
    password,
    role
  }: CreateUserProps) {
    if (!email || !password || !role) {
      throw new Error("All fields are required");
    }

    const user = await prismaClient.user.create({
      data: {
        email,
        password,
        role
      },
    });

    return user;
  }
}

export { CreateUserService };
