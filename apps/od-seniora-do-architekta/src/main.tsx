import React, { StrictMode } from 'react';
import ReactWebComponent from 'react-web-component';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

ReactWebComponent.create(<App />, 'react-app');
