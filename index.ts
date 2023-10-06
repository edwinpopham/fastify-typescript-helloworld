import fastify from "fastify";

interface IQuerystring {
  name: string;
}

const server = fastify();

server.get("/helloworld", async (request, reply) => {
  return "hello mate, it works";
});

server.get<{ Querystring: IQuerystring }>("/hello-name", async (request, reply) => {
  const { name } = request.query;
  const customerHeader = request.headers["h-Custom"];

  reply.code(200).send(`hello ${name}, its working mate`);
  reply.code(404).send({ error: "Not found" });
  return `logged in!`;
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
