export class View<T> {

    protected elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(model: T): string {
        throw new Error('Tem que sobrescrever o método template')
    }

    update(model: T): void {
        this.elemento.innerHTML = this.template(model)
    }
}