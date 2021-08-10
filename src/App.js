import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Match from './pages/Match';
import PopupRules from './components/PopupRules';
import GlobalStyle from './styles/globals';

const App = () => {
  return(<>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
          <Route path="/" exact={ true } component={ Home } />
          <Route path="/match" component={ Match } />
          <Route path="/rules" component={ PopupRules } />
        </Switch>
      </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;