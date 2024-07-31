import React from 'react';
import * as ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

import App from './app/app';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient: ReactDOM,
  rootComponent: App,
});
