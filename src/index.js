import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globals';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Match from './pages/Match';
import PopupRules from './components/PopupRules';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
          <Route path="/" exact={ true } component={ App } />
          <Route path="/match" component={ Match } />
          <Route path="/rules" component={ PopupRules } />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
