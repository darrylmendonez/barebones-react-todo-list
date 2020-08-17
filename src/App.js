import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home'
import ClassComponent from './components/classComponent'
import FunctionComponent from './components/functionComponent'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/class-component' component={ClassComponent} />
          <Route path='/function-component' component={FunctionComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
