class Aluno {
  constructor({ id, nome, email }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
    };
  }
}

module.exports = Aluno;
