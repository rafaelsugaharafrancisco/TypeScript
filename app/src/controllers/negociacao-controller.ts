import { tempoDeExecucao } from "../decorators/tempo-execucao.js"
import { DiasDaSemana } from "../enums/dias-da-semana.js"
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
        this.inputData = document.querySelector('#data') as HTMLInputElement
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes)
    }

    @tempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criar(this.inputData.value, 
                                            this.inputQuantidade.value, 
                                            this.inputValor.value
                                            )
        const diaUtil = this.verificarDiaUtil(negociacao.data)

        if (!diaUtil) {
            // nova classe para emitir um alerta no front-end
            new MensagemAlertaView('#mensagemView')
                .update('Data inválida. O dia deve ser apenas dias úteis')

            return 
        }
        this.negociacoes.adiciona(negociacao)
        this.atualizarView()
        this.limpaFormulario()
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
        return data.getDay() > DiasDaSemana.DOMINGO && 
                data.getDay() < DiasDaSemana.SABADO ? true : false 
    }
}