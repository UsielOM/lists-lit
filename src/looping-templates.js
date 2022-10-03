import { LitElement, html } from 'lit-element';

export class LoopingTemplates extends LitElement {


    static get properties() {
        return {
            items: {},
        };
    }
    constructor() {
        super();
        this.items = ['red', 'green', 'blue'];
    }
    render() {
        const itemTemplates = [];
        for (const i of this.items) {
            itemTemplates.push(html `<li>${i}</li>`);
        }
        return html `
        <ul>
            ${itemTemplates}
        </ul>
        `;
    }
}
customElements.define('looping-templates', LoopingTemplates);