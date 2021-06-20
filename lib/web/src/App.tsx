import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header, Deck } from './modules';

const App: FC = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <BrowserRouter>
          <Switch>
            <Route exact path={['/', 'dashboard']}>
              <Header />
              <Deck />
              {/* Cards */}
              {/* Buttons */}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
