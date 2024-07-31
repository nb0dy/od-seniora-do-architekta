import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
    <div class="wrapper">
     <button style="cursor: pointer">Angular</button>
     <button style="cursor: pointer">React</button>
    </div>
      `;
  }
}
customElements.define('od-seniora-do-architekta-root', AppElement);
