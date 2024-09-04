const Banco = require("../src/banco");

describe('Testes da classe Banco', () => {
    let conta;

    beforeEach(() => {
        conta = new Banco('Conta Guilherme', 2);
    });

    test('Deve depositar dinheiro corretamente', () => {
        conta.depositar(7.7);
        expect(conta.obterSaldo()).toBe(9.7);
    });
});