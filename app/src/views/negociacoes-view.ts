import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${this.converterData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    })}
                </tbody>
            </table>
        `
    }

    private converterData(data: Date): String {
        return new Intl.DateTimeFormat().format(data)
    }
}