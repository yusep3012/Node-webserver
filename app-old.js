import http from "http";

// Req es toda la información del url que piden en el sitio web, headers, argumentos, etc.
// Res es lo que el servidor va a responder al cliente

http
  .createServer((req, res) => {
    res.write("Hola mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando en el puerto", 8080);
