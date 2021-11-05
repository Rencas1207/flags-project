import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';

import { GlobalStyles } from './styles/GlobalStyles';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Header } from './components/Header/Header';

const store = createStore(reducer);

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  function changeMedia(mq) {
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', changeMedia);
    setDarkMode(mq.matches);
    return () => {
      mq.removeEventListener('change', changeMedia);
    };
  }, [setDarkMode]);

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <GlobalStyles />
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:code" component={Detail} />
        </Router>
      </Provider>
    </main>
  );
};
