import { FC, StrictMode } from 'react';
import { render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from './modules/ApolloProvider';

import './style/index.css';
import './style/tailwind.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

const Providers: FC = ({ children }) => (
  <ApolloProvider>
    <HelmetProvider>{children}</HelmetProvider>
  </ApolloProvider>
);

render(
  <StrictMode>
    <Providers>
      <BrowserRouter>
        <Switch>
          <Route exact path={['/', 'dashboard']} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Providers>
  </StrictMode>,
  document.getElementById('root')
);
