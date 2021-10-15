export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw new Error('Tem que sobrescrever o método template');
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
