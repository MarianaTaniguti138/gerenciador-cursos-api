const express = require("express");
const router = express.Router();

const CursoController = require("../controllers/CursoController");

router.get("/cursos", CursoController.listar);
router.post("/cursos", CursoController.criar);

module.exports = router;