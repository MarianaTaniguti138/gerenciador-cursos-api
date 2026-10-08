const banco = require("../config/db");
const Aluno = require("./Aluno");

const AlunoModel = {
  async listar() {
    try {
      const [linhas] = await banco.execute(
        "SELECT id, nome, email FROM alunos"
      );

      return linhas.map((linha) => new Aluno(linha));
    } catch (erro) {
      throw erro;
    }
  },

  async criar(nome, email) {
    try {
      const [resultado] = await banco.execute(
        "INSERT INTO alunos (nome, email) VALUES (?, ?)",
        [nome, email]
      );

      return new Aluno({
        id: resultado.insertId,
        nome,
        email,
      });
    } catch (erro) {
      throw erro;
    }
  },
};

module.exports = AlunoModel;