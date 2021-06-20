import { FC, StrictMode } from 'react';
import { render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from './modules/ApolloProvider';

import './style/index.css';
import './style/tailwind.css';

import App from './App';

const Providers: FC = ({ children }) => (
  <ApolloProvider>
    <HelmetProvider>{children}</HelmetProvider>
  </ApolloProvider>
);

render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
);
