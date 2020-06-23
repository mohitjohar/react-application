import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import { Route, BrowserRouter as Router1 } from 'react-router-dom';
import LoginForm from './pages/Login';
import CRUDSystem from './pages/CRUDSystem';
import Update from './pages/Apicrud/Update';
import AddUser from './pages/Apicrud/Add';
import APICrud from './pages/Apicrud';
import Details from './pages/Detail';
import Home from './pages/Home';
// import App from './pages/Home/app';
import Logout from './pages/Logout';
import * as serviceWorker from './serviceWorker';
import Study from './pages/study';
// import NodeMysql from './pages/NodeMysql';

const routing = (
  <>
    <Router1>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/study" component={Study} />
      {/* <Route path="/app" component={App} /> */}
      <Route path="/login" component={LoginForm} />
      {/* <Route path="/nodemysql" component={NodeMysql} /> */}
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
