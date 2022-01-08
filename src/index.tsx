import React from 'react';
import { render } from 'react-dom';

import { Provider } from './providers';
import { App } from './components/App';

render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
