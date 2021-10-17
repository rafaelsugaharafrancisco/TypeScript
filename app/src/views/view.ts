import { tempoDeExecucao } from "../decorators/tempo-execucao.js"

export abstract class View<T> {

    protected elemento: HTMLElement

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor)

        if (elemento) {
            this.elemento = elemento as HTMLElement
        } else {
            throw Error(`O seletor ${seletor} não existe no DOM. Favor verificar.`)
        }
    }

    protected abstract template(model: T): string

    @tempoDeExecucao()
    public update(model: T): void {
        this.elemento.innerHTML = this.template(model)
    }
}