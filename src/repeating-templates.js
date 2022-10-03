import { LitElement, html } from 'lit-element';

export class RepeatingTemplates extends LitElement {


    static get properties() {
        return {
            colors: {},
        };
    }
    constructor() {
        super();
        this.colors = ['red', 'green', 'blue'];
    }
    render() {
            return html `
        <ul>
            ${this.colors.map((color) => 
             html`<li style="color: ${color}">${color}</li>`
            )}
        </ul>
        `;
    }
}
customElements.define('repeating-templates', RepeatingTemplates);