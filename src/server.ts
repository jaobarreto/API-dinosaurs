import fastify from "fastify";
import cors from "@fastify/cors";
import { authMiddleware } from "./middlewares/authMiddleware";
import { dinosaurRoutes } from "./routes/dinosaur.routes";
import { userRoutes } from "./routes/user.routes";

const app = fastify({ logger: true });

app.setErrorHandler((error, req, res) => {
  res.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(cors);
  await app.register(dinosaurRoutes);
  await app.register(userRoutes);

  try {
    await app.listen({ port: 3333 });
    console.log(`Server is running on port 3333`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
