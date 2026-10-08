const CursoModel = require("../models/CursoModel");

const CursoController = {
  async listar(req, res) {
    try {
      const cursos = await CursoModel.listar();

      res.status(200).json(cursos);
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao listar cursos.",
        detalhe: erro.message,
      });
    }
  },

  async criar(req, res) {
    try {
      const { titulo, descricao } = req.body;

      if (!titulo) {
        return res.status(400).json({
          erro: "O título do curso é obrigatório.",
        });
      }

      const curso = await CursoModel.criar(titulo, descricao || null);

      res.status(201).json(curso);
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao cadastrar curso.",
        detalhe: erro.message,
      });
    }
  },
};

module.exports = CursoController;