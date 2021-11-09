import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';

import { GlobalStyles } from './styles/GlobalStyles';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Header } from './components/Header/Header';

const store = createStore(reducer);

export const App = () => {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || false;
  };
  const [darkMode, setDarkMode] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <main className={darkMode ? 'is-dark-mode' : 'is-light-mode'}>
      <Provider store={store}>
        <Router>
          <GlobalStyles />
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            path={`${process.env.PUBLIC_URL}/country/:code`}
            component={Detail}
          />
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Router>
      </Provider>
    </main>
  );
};
