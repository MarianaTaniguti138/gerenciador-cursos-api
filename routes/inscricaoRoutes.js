const express = require("express");
const router = express.Router();

const InscricaoController = require("../controllers/InscricaoController");

router.post("/inscricoes", InscricaoController.associar);

router.get(
  "/alunos/:id/cursos",
  InscricaoController.listarCursosDoAluno
);

router.get(
  "/cursos/:id/alunos",
  InscricaoController.listarAlunosDoCurso
);

module.exports = router;
