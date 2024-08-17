import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  public connectedCallback() {
    // this.shadowRoot?.addEventListener('click', this.logSmt);
    this.innerHTML = `
    <div class="wrapper">
     <button id="angular" style="cursor: pointer">Angular</button>
     <button id="react" style="cursor: pointer">React</button>
    </div>
      `;

    document.getElementById('angular')?.addEventListener('click', () => this.insertApplication('angular'));
    document.getElementById('react')?.addEventListener('click', () => this.insertApplication('react'));
  }

  public insertApplication(type: 'angular' | 'react') {
    const iframeContainer = document.getElementById('iframe');
    const iframe = document.createElement('iframe');
    console.log('apptype', type);
    switch (type) {
      case 'angular': {
        iframe.src = 'http://localhost:4300';
        break;
      }

      case 'react': {
        iframe.src = 'http://localhost:4400';
        break;
      }
    }

    setTimeout(() => {
      console.log('send message');
      iframe.contentWindow?.postMessage('test', '*');
    }, 3000);

    iframeContainer?.replaceChildren(iframe);
  }
}
customElements.define('app-host', AppElement);
