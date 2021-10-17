import { View } from "./view.js";

export class MensagemAlertaView extends View<string> {

    protected template(mensagem: string): string {
        return `<p class="alert alert-warning">${mensagem}</p>`
    }

}