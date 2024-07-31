import './app/app.element';

import { registerApplication, start } from 'single-spa';
import {imports} from "@nx/vite/src/utils/test-files/test-vite-configs";

function loadScript(path: string) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = path;
    script.addEventListener('load', resolve);
    document.head.appendChild(script);
  });
}

// Simple usage
registerApplication({
  name: 'angular',
  // app: () =>
  //   loadScript('http://localhost:4400').then((app) => {
  //     console.log('app', app);
  //     return window['microApp'];
  //   }),
  app: () => import('@od-seniora-do-architekta/react'),
  activeWhen: '/react',
});

// Config with more expressive API
registerApplication({
  name: 'app1',
  app: () => import('@od-seniora-do-architekta/angular'),
  activeWhen: '/angular',
});

start();
