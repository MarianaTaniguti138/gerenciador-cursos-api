const banco = require("../config/db");

const InscricaoModel = {
  async criar(alunoId, cursoId) {
    try {
      const [resultado] = await banco.execute(
        "INSERT INTO inscricoes (aluno_id, curso_id) VALUES (?, ?)",
        [alunoId, cursoId]
      );

      return {
        aluno_id: alunoId,
        curso_id: cursoId,
      };
    } catch (erro) {
      throw erro;
    }
  },

  async listarCursosDoAluno(alunoId) {
    try {
      const [linhas] = await banco.execute(
        `SELECT cursos.id, cursos.titulo, cursos.descricao
         FROM cursos
         INNER JOIN inscricoes
           ON cursos.id = inscricoes.curso_id
         WHERE inscricoes.aluno_id = ?`,
        [alunoId]
      );

      return linhas;
    } catch (erro) {
      throw erro;
    }
  },

  async listarAlunosDoCurso(cursoId) {
    try {
      const [linhas] = await banco.execute(
        `SELECT alunos.id, alunos.nome, alunos.email
         FROM alunos
         INNER JOIN inscricoes
           ON alunos.id = inscricoes.aluno_id
         WHERE inscricoes.curso_id = ?`,
        [cursoId]
      );

      return linhas;
    } catch (erro) {
      throw erro;
    }
  },
};

module.exports = InscricaoModel;