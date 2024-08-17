import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// export const { bootstrap, mount, unmount } = singleSpaReact({
//   React,
//   ReactDOMClient: ReactDOM,
//   rootComponent: App,
//   errorBoundary() {
//     return <div>This renders when a catastrophic error occurs</div>;
//   },
// });
