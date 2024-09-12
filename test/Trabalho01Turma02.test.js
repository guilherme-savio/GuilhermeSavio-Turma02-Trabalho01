const Biblioteca = require("../src/Trabalho01Turma02");

describe('Testes da classe Biblioteca', () => {
    let biblioteca;

    beforeEach(() => {
    biblioteca = new Biblioteca();
    });

    test('Validação de adição de livros', () => {
        const livroUm = {
            id: 1,
            titulo: "Guia do Mochileiro das Galáxias",
            ano: 1980,
          };

        biblioteca.adicionarLivro(livroUm)

        expect(biblioteca.listarLivros()).toContainEqual(livroUm);
    });

    test('Validação de remoção de livros', () => {
        const livroDois = {
            id: 2,
            titulo: "A Revolução dos Bichos",
            ano: 1960,
          };

        biblioteca.adicionarLivro(livroDois)
        expect(biblioteca.listarLivros()).toContainEqual(livroDois);
        biblioteca.removerLivro(2);
        expect(biblioteca.listarLivros()).not.toContainEqual(livroDois);
    });

    test('Validação de busca de livro por ID', () => {
        const livroTres = {
            id: 3,
            titulo: "1984",
            ano: 1950,
          };

        biblioteca.adicionarLivro(livroTres);

        expect(biblioteca.buscarLivroPorId(3)).toEqual(livroTres);
    });

    test('Validação de busca de livro por Titulo', () => {
        const livroQuatro = {
            id: 4,
            titulo: "Pai rico, Pai pobre",
            ano: 2010,
          };
        biblioteca.adicionarLivro(livroQuatro)
        expect(biblioteca.buscarLivroPorTitulo("Pai rico, Pai pobre")).toContainEqual(livroQuatro)
    });

    test('Validação de listagem de livros', () => {
        const livroUm = {
            id: 1,
            titulo: "Guia do Mochileiro das Galáxias",
            ano: 1980,
        };
        
        const livroDois = {
            id: 2,
            titulo: "A Revolução dos Bichos",
            ano: 1960,
        };

        const livroTres = {
            id: 3,
            titulo: "1984",
            ano: 1950,
        };

        const livroQuatro = {
            id: 4,
            titulo: "Pai rico, Pai pobre",
            ano: 2010,
        };
        
        biblioteca.adicionarLivro(livroUm);
        biblioteca.adicionarLivro(livroDois);
        biblioteca.adicionarLivro(livroTres);
        biblioteca.adicionarLivro(livroQuatro);

        expect(biblioteca.listarLivros()).toEqual([
            livroUm,
            livroDois,
            livroTres,
            livroQuatro
          ]);
    });

    test('Validação de cadastro de membro', () => {
        const membroDefault = {
            id: 1,
            nome: "João da Silva",
            cargo: "Funcionario",
        };
        
        biblioteca.adicionarMembro(membroDefault);
        expect(biblioteca.listarMembros()).toContainEqual(membroDefault)
    });

    test('Validação de remoção de membro', () => {
        const membroEspecifico = {
            id: 2,
            nome: "Silvia da Silva",
            cago: "Secretária",
        };
        
        biblioteca.adicionarMembro(membroEspecifico);
        expect(biblioteca.listarMembros()).toContainEqual(membroEspecifico)
        biblioteca.removerMembro(2)
        expect(biblioteca.listarMembros()).not.toContainEqual(membroEspecifico);
    });

    test('Validação de busca de membro por ID', () => {
        const membroEscolar = {
            id: 3,
            nome: "Gabriel Souza",
            cargo: "Aluno",
          };

        biblioteca.adicionarMembro(membroEscolar);

        expect(biblioteca.buscarMembroPorId(3)).toEqual(membroEscolar);
    });

    test('Validação de listagem de membros', () => {
        const membroUm = {
            id: 1,
            nome: "João Francisco",
            cargo: "Secretário",
        };
        
        const membroDois = {
            id: 2,
            nome: "Pedro Chagas",
            cargo: "Aluno",
        };

        const membroTres = {
            id: 3,
            nome: "Lucas Pereira",
            cargo: "Contribuinte",
        };

        const membroQuatro = {
            id: 4,
            nome: "Marcos Silva",
            cargo: "Professor",
        };
        
        biblioteca.adicionarMembro(membroUm);
        biblioteca.adicionarMembro(membroDois);
        biblioteca.adicionarMembro(membroTres);
        biblioteca.adicionarMembro(membroQuatro);

        expect(biblioteca.listarMembros()).toEqual([
            membroUm,
            membroDois,
            membroTres,
            membroQuatro
          ]);
    });

    test('Validação de checagem de livros emprestados', () => {
        const livroUm = {
            id: 1,
            titulo: "A Revolução dos Bichos",
            ano: 1960,
            emprestado: true,
            idMembro: 1
          };

        const livroDois = {
            id: 2,
            titulo: "Planeta dos Mamacos",
            ano: 2010,
            emprestado: false,
            idMembro: 1
        };
        
        biblioteca.adicionarLivro(livroUm);
        biblioteca.adicionarLivro(livroDois);
        
        expect(biblioteca.listarLivrosEmprestados()).toContainEqual(livroUm);
    });

    test('Validação de checagem de livros disponíveis', () => {
        const livroUm = {
            id: 1,
            titulo: "A Revolução dos Bichos",
            ano: 1960,
            emprestado: true,
            idMembro: 1
          };

        const livroDois = {
            id: 2,
            titulo: "Planeta dos Mamacos",
            ano: 2010,
            emprestado: false,
            idMembro: 1
        };
        
        biblioteca.adicionarLivro(livroUm);
        biblioteca.adicionarLivro(livroDois);
        
        expect(biblioteca.listarLivrosDisponiveis()).toContainEqual(livroDois);
    });

    test('Validação de checagem de quantidade de livros', () => {
        const livroUm = {
            id: 1,
            titulo: "A Revolução dos Bichos",
            ano: 1960,
            emprestado: true,
            idMembro: 1
          };

        const livroDois = {
            id: 2,
            titulo: "Planeta dos Mamacos",
            ano: 2010,
            emprestado: false,
            idMembro: 1
        };
        
        biblioteca.adicionarLivro(livroUm);
        biblioteca.adicionarLivro(livroDois);
        
        expect(biblioteca.contarLivros()).toEqual(2);
    });

    test('Validação de contagem de membros', () => {
        const membroUm = {
            id: 1,
            nome: "João Francisco",
            cargo: "Secretário",
        };
        
        const membroDois = {
            id: 2,
            nome: "Pedro Chagas",
            cargo: "Aluno",
        };

        const membroTres = {
            id: 3,
            nome: "Lucas Pereira",
            cargo: "Contribuinte",
        };

        const membroQuatro = {
            id: 4,
            nome: "Marcos Silva",
            cargo: "Professor",
        };
        
        biblioteca.adicionarMembro(membroUm);
        biblioteca.adicionarMembro(membroDois);
        biblioteca.adicionarMembro(membroTres);
        biblioteca.adicionarMembro(membroQuatro);
        
        expect(biblioteca.contarMembros()).toEqual(4);
    });

    test('Validação de listagem de livros por autor', () => {
        const livroUm = {
            id: 1,
            titulo: "A Revolução dos Bichos",
            ano: 1960,
            emprestado: true,
            idMembro: 1,
            autor: "George Orwell"
          };

        const livroDois = {
            id: 2,
            titulo: "1984",
            ano: 1960,
            emprestado: false,
            idMembro: 1,
            autor: "George Orwell"
        };
        
        biblioteca.adicionarLivro(livroUm);
        biblioteca.adicionarLivro(livroDois);
        
        expect(biblioteca.listarLivrosPorAutor("George Orwell")).toEqual([livroUm, livroDois]);
    });

    test('Validação de listagem de livros por genero', () => {
        const livroUm = {
            id: 1,
            titulo: "Biblia Sagrada",
            ano: 0,
            emprestado: false,
            idMembro: 2,
            autor: "Vários autores",
            genero: "Religião"
          };

        const livroDois = {
            id: 2,
            titulo: "Alcorão",
            ano: 600,
            emprestado: false,
            idMembro: 2,
            autor: "Vários autores",
            genero: "Religião"
        };
        
        biblioteca.adicionarLivro(livroUm);
        biblioteca.adicionarLivro(livroDois);
        
        expect(biblioteca.listarLivrosPorGenero("Religião")).toEqual([livroUm, livroDois]);
    });

    test('Validação de listagem de livros por ano', () => {
        const livroUm = {
            id: 1,
            titulo: "Harry Potter",
            ano: 2002,
            emprestado: true,
            idMembro: 3,
            autor: "J.K",
            genero: "Fantasia"
          };

        const livroDois = {
            id: 2,
            titulo: "Toy Story",
            ano: 2002,
            emprestado: true,
            idMembro: 3,
            autor: "Max Philips",
            genero: "Fantasia"
        };
        
        biblioteca.adicionarLivro(livroUm);
        biblioteca.adicionarLivro(livroDois);
        
        expect(biblioteca.listarLivrosPorAno(2002)).toEqual([livroUm, livroDois]);
    });
});