import { FastifyInstance } from "fastify";

export const appRouter = async (app: FastifyInstance) => {
  app.get("/", async () => {
    return { hello: "world" };
  });
};
