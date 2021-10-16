import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    public adiciona(novaNegociacao: Negociacao): void {
        this.negociacoes.push(novaNegociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}