import { FastifyRequest, FastifyReply } from 'fastify';
import { UserType } from '@fastify/jwt';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export const authMiddleware = async (req: FastifyRequest, res: FastifyReply) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).send({ message: 'Token não fornecido' });
  }

  try {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      throw new Error("JWT_SECRET não está definido no arquivo .env");
    }

    const decoded = jwt.verify(token, secretKey) as TokenPayload;

    req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
  } catch (error) {
    return res.status(401).send({ message: 'Token inválido' });
  }
};
