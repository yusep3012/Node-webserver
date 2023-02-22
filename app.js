import * as url from "url";
import express from "express";
import hbs from "hbs";
import dotenv from "dotenv";

dotenv.config();

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = process.env.PORT || 8081;

// Handlebars
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

// Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Yusep Ruiz",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Yusep Ruiz",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Yusep Ruiz",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/back/404.html");
});

app.listen(port);
