import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router1 } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/Register'
import CRUDSystem from "./pages/CRUDSystem"
import CreateForm from './pages/CreateForm'
import UpdateForm from './pages/UpdateForm'
import DeleteForm from './pages/DeleteForm'
import APICrud from './pages/Apicrud'
import Pagination1 from './pages/Pagination'
import UpdateItem from "./pages/UpdateItem"
import Details from './pages/Details'
import PostSlider from './components/PostSlider'
import Page1 from './pages/Page1'
import Logout from './pages/Logout'
import * as serviceWorker from './serviceWorker'
import Header from './components/Header'

const routing = (
  <>

  <Router1>
  <Header/>
      <Route exact path="/" component={Page1} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/logout" component={Logout}/>
      		  <Route path="/crudsystem" component={CRUDSystem}/>
            <Route path="/createform" component={CreateForm}/>
            <Route path="/updateform" component={UpdateForm}/>
            <Route path="/deleteform" component={DeleteForm}/>
            <Route path="/updateitem" component={UpdateItem}/>
            <Route path="/pagination" component={Pagination1}/>
            <Route path="/apicrud" component={APICrud}/>
            <Route path="/details/:detailId" component={Details}/>
            <Route path="/postslider" component={PostSlider}/>
            <Route path="/postslider1" component={Page1}/>
  </Router1>
  </>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
