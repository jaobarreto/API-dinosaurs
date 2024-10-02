import prismaClient from "../prisma";
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const loginUser = async (email: string, password: string) => {
  const user = await prismaClient.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Email ou senha inválidos');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Email ou senha inválidos');
  }

  const token = sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  return token;
};
