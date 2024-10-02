import { FastifyRequest, FastifyReply } from 'fastify';
import { loginUser } from '../../services/user/UserLoginService';

interface LoginRequestBody {
  email: string;
  password: string;
}

export const handleLogin = async (req: FastifyRequest<{ Body: LoginRequestBody }>, res: FastifyReply) => {
  const { email, password } = req.body;

  try {
    const token = await loginUser(email, password);
    return res.send({ token });
  } catch (error) {
    return res.status(401).send({ message: "Error" });
  }
};
