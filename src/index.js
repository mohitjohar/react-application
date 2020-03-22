import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import { Route, BrowserRouter as Router1 } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/Register';
import CRUDSystem from './pages/CRUDSystem';
import Update from './components/apicrud/Update';
import AddUser from './components/apicrud/Create';
import APICrud from './pages/Apicrud';
import Details from './pages/Details';
import DynamicPages from './pages/DynamicPages';
import Logout from './pages/Logout';
import * as serviceWorker from './serviceWorker';

const routing = (
  <>
    <Router1>
      <Route exact path="/" component={DynamicPages} />
      <Route path="/home" component={DynamicPages} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/logout" component={Logout} />
      <Route path="/crudsystem" component={CRUDSystem} />
      <Route path="/apicrud" component={APICrud} />
      <Route path="/adduser" component={AddUser} />
      <Route path="/update/:detailId" component={Update} />
      <Route path="/details/:detailId" component={Details} />
    </Router1>
  </>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
