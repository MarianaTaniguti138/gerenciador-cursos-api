const express = require("express");
const router = express.Router();

const AlunoController = require("../controllers/AlunoController");

router.get("/alunos", AlunoController.listar);
router.post("/alunos", AlunoController.criar);

module.exports = router;