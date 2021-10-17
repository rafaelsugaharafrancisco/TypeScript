export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`O seletor ${seletor} não existe no DOM. Favor verificar.`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
