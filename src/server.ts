import { fastify } from "fastify";
import { appRouter } from "./routers/router";

const app = fastify({
  logger: true,
});

app.register(appRouter, {
  prefix: "/",
});

const run = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
  }
};

run();
