import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemAlertaView } from "../views/mensagem-alert-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criar(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        const diaUtil = this.verificarDiaUtil(negociacao.data);
        if (!diaUtil) {
            new MensagemAlertaView('#mensagemView')
                .update('Data inválida. O dia deve ser apenas dias úteis');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizarView();
        this.limpaFormulario();
    }
    limpaFormulario() {
        this.inputData.focus();
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
    atualizarView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação registrada com sucesso');
    }
    verificarDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO ? true : false;
    }
}
