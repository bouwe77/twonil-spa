import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/index';

import './grid.css'
import './App.css'

import Header from './components/layout/Header'
import Content from './components/layout/Content'
import GameContent from './components/layout/GameContent'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <div className="header">
            <Header />
          </div>

          <div className="content-container">
            <Switch>
              <Route path='/' component={Content} exact />
              <Route path='/games' component={Content} exact />
              <Route component={GameContent} />
            </Switch>

            <div className="footer">
              <Footer />
            </div>

          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
