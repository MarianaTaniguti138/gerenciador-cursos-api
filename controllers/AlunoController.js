const AlunoModel = require("../models/AlunoModel");

const AlunoController = {
  async listar(req, res) {
    try {
      const alunos = await AlunoModel.listar();

      res.status(200).json(alunos);
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao listar alunos.",
        detalhe: erro.message,
      });
    }
  },

  async criar(req, res) {
    try {
      const { nome, email } = req.body;

      if (!nome || !email) {
        return res.status(400).json({
          erro: "Nome e email são obrigatórios.",
        });
      }

      const aluno = await AlunoModel.criar(nome, email);

      res.status(201).json(aluno);
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao cadastrar aluno.",
        detalhe: erro.message,
      });
    }
  },
};

module.exports = AlunoController;