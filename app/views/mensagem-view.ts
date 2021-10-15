export class MensagemView {

    private elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(mensagem: string): string {
        return `<p class="alert alert-info">${mensagem}</p>`
    }

    update(mensagem: string): void {
        this.elemento.innerHTML = this.template(mensagem)
    }
}