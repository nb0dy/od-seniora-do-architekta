import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

(async () => {
  const app = await createApplication(appConfig);

  const appComponent = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('app-wc', appComponent);
})();
