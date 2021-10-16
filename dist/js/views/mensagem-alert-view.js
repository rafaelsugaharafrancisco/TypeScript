import { View } from "./view.js";
export class MensagemAlertaView extends View {
    template(mensagem) {
        return `<p class="alert alert-warning">${mensagem}</p>`;
    }
}
