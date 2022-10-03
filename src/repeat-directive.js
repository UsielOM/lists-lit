import { LitElement, html } from 'lit-element';
import { repeat } from 'lit/directives/repeat';

export class RepeatDirective extends LitElement {

    static get properties() {
        return {
            employees: {},
        };
    }
    constructor() {
        super();
        this.employees = [
            { id: 0, givenName: 'Fred', familyName: 'Flintstone' },
            { id: 1, givenName: 'George', familyName: 'Jetson' },
            { id: 2, givenName: 'Barney', familyName: 'Rubble' },
            { id: 3, givenName: 'Cosmo', familyName: 'Spacely' },
        ];
    }
    sort = 1;
    render() {
            return html `
        <ul>
            ${repeat(
                this.employees,
                (employee) => employee.id,
                (employee, index) => html `
                <li>${index}: ${employee.familyName}, ${employee.givenName}</li>
                `
            )}
        </ul>
        <button @click=${this.toggleSort}>Toggle sort</button>
        `;
    }
    toggleSort(){
        this.sort *= -1;
        this.employees = [
            ...this.employees.sort(
                (a, b) =>
                this.sort *
                (a.familyName.localeCompare(b.familyName)|| 
                a.givenName.localeCompare(b.givenName))

            ),
        ];
    }
}
customElements.define('repeat-directive', RepeatDirective);