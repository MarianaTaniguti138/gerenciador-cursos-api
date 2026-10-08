const InscricaoModel = require("../models/InscricaoModel");

const InscricaoController = {
  async associar(req, res) {
    try {
      const { aluno_id, curso_id } = req.body;

      if (!aluno_id || !curso_id) {
        return res.status(400).json({
          erro: "aluno_id e curso_id são obrigatórios.",
        });
      }

      const inscricao = await InscricaoModel.criar(
        aluno_id,
        curso_id
      );

      res.status(201).json({
        mensagem: "Aluno inscrito no curso com sucesso.",
        inscricao,
      });
    } catch (erro) {
      if (erro.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
          erro: "Este aluno já está inscrito neste curso.",
        });
      }

      res.status(500).json({
        erro: "Erro ao realizar inscrição.",
        detalhe: erro.message,
      });
    }
  },

  async listarCursosDoAluno(req, res) {
    try {
      const { id } = req.params;

      const cursos = await InscricaoModel.listarCursosDoAluno(id);

      res.status(200).json(cursos);
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao buscar cursos do aluno.",
        detalhe: erro.message,
      });
    }
  },

  async listarAlunosDoCurso(req, res) {
    try {
      const { id } = req.params;

      const alunos = await InscricaoModel.listarAlunosDoCurso(id);

      res.status(200).json(alunos);
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao buscar alunos do curso.",
        detalhe: erro.message,
      });
    }
  },
};

module.exports = InscricaoController;