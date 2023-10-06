import fastify from "fastify";

const server = fastify();

server.get("/helloworld", async (request, reply) => {
  return "hello mate, it works";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
