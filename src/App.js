import React from 'react';
import Home from './pages/Home';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Match from './pages/Match';
import PopupRules from './components/PopupRules';
import GlobalStyle from './styles/globals';

const App = () => {
  return(<>
    <GlobalStyle />
    <HashRouter>
      <Provider store={ store }>
        <Switch>
          <Route path="/" exact={ true } component={ Home } />
          <Route path="/match" component={ Match } />
          <Route path="/rules" component={ PopupRules } />
        </Switch>
      </Provider>
    </HashRouter>
    </>
  );
}

export default App;