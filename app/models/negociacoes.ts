import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    adiciona(novaNegociacao: Negociacao): void {
        this.negociacoes.push(novaNegociacao)
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}