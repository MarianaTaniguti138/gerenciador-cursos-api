const banco = require("../config/db");
const Curso = require("./Curso");

const CursoModel = {
  async listar() {
    try {
      const [linhas] = await banco.execute(
        "SELECT id, titulo, descricao FROM cursos"
      );

      return linhas.map((linha) => new Curso(linha));
    } catch (erro) {
      throw erro;
    }
  },

  async criar(titulo, descricao) {
    try {
      const [resultado] = await banco.execute(
        "INSERT INTO cursos (titulo, descricao) VALUES (?, ?)",
        [titulo, descricao]
      );

      return new Curso({
        id: resultado.insertId,
        titulo,
        descricao,
      });
    } catch (erro) {
      throw erro;
    }
  },
};

module.exports = CursoModel;