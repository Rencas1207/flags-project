import React from 'react';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';

import { GlobalStyles } from './styles/GlobalStyles';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

const store = createStore(reducer);

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />

        <Route exact path="/" component={Home} />
        <Route exact path="/country/:name" component={Detail} />

        <Redirect to="/" />
      </Router>
    </Provider>
  );
};
