import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemAlertaView } from "../views/mensagem-alert-view.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao()
        const diaUtil = this.verificarDiaUtil(negociacao.data)

        if (!diaUtil) {
            new MensagemAlertaView('#mensagemView').update('Data inválida. O dia deve ser apenas dias úteis')

            return 
        }
        this.negociacoes.adiciona(negociacao)
        this.atualizarView()
        this.limpaFormulario()
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(data, quantidade, valor)
    }

    private limpaFormulario(): void {
        this.inputData.focus()
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
    }

    private atualizarView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação registrada com sucesso')
    }

    private verificarDiaUtil(data: Date): boolean {
        return data.getDay() > 0 && data.getDay() < 6 ? true : false 
    }
}