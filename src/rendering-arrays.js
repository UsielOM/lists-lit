import { LitElement, html } from 'lit-element';

export class RenderingArrays extends LitElement {


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
        <p>Colors: ${this.colors}</p>
        `;
    }
}
customElements.define('rendering-arrays', RenderingArrays);