import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/user/CreateUserSevice";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class CreateUserController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { email, password, role } = req.body as {
      email: string;
      password: string;
      role: string;
    };

    const UserService = new CreateUserService();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserService.execute({
      email,
      password: hashedPassword,
      role
    });

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET || '123', { expiresIn: '1h' });

    res.send({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      token,
    });
  }
}

export { CreateUserController };
