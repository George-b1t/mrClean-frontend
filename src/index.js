import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Cadastro from './components/forms/Cadastro';
import Login from './components/forms/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/shop' exact={true} component={Shop}/>
        <Route path='/aboutus' exact={true} component={AboutUs}/>
        <Route path='/cadastro' exact={true} component={Cadastro}/>
        <Route path='/login' exact={true} component={Login}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
