const express = require("express");
const AlunoRoutes = require("./routes/alunoRoutes");
const CursoRoutes = require("./routes/cursoRoutes");
const InscricaoRoutes = require("./routes/inscricaoRoutes");

const app = express();

app.use(express.json());

app.use("/", AlunoRoutes);
app.use("/", CursoRoutes);
app.use("/", InscricaoRoutes);

app.listen(3000, () => {
  console.log("API em http://localhost:3000");
})