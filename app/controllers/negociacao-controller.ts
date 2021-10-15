import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona(): void {
        this.negociacoes.adiciona(this.criaNegociacao())
        console.log(this.negociacoes.lista())
        this.limpaFormulario()
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(data, quantidade, valor)
    }

    limpaFormulario(): void {
        this.inputData.focus()
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
    }
}