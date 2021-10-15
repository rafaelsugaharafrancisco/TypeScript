export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(novaNegociacao) {
        this.negociacoes.push(novaNegociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
