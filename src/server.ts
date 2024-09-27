import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
    console.log(`Server is running on port 3333`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
