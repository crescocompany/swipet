import { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { Header, Deck } from './components/ui';

import logo from './logo.svg';

const App: FC = () => {
  return (
    <div className='relative bg-grey'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <BrowserRouter>
          <Switch>
            <Route exact path={['/', 'dashboard']}>
              <Header />
              <Deck />
              {/* Cards */}
              {/* Buttons */}
            </Route>
            <Route exact path='/react'>
              <div className='App'>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Swipet - A home for your pet
                  </p>
                </header>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
