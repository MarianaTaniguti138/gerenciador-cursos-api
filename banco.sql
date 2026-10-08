CREATE DATABASE gerenciador_cursos;

USE gerenciador_cursos;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE inscricoes (
    aluno_id INT,
    curso_id INT,
    PRIMARY KEY (aluno_id, curso_id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);