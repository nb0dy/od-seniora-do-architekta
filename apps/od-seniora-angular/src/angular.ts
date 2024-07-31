import { NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavigationStart, RouterModule } from '@angular/router';
import singleSpaAngular from 'single-spa-angular';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

export const { bootstrap, mount, unmount } = singleSpaAngular({
  bootstrapFunction: () => {
    return bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
  },
  template: '<app-root />',
  Router: RouterModule,
  NavigationStart,
  NgZone,
});
