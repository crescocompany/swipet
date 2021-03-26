import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { Header, Cards } from './components/ui';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={['/', 'dashboard']}>
            <Header />
          {/* Cards */}
          {/* Buttons */}
          </Route>
        <Route exact path='/cards' component={Cards} />
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
  );
}

export default App;
