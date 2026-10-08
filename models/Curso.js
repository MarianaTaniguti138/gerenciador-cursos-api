class Curso {
  constructor(dados) {
    this.id = dados.id;
    this.titulo = dados.titulo;
    this.descricao = dados.descricao;
  }

  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      descricao: this.descricao,
    };
  }
}

module.exports = Curso;