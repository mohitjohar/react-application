import React from 'react';
import {Link} from "react-router-dom"
const Header = () =>{

  if(localStorage.token){
return (
<header class="bg-info text-white main-header">
<div class="container">
 <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand"><Link to="/">MKReactapp</Link></a>
  <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
 <ul class="navbar-nav mr-left-auto">
 <li class="nav-item"><a class="nav-link"><Link to="/postslider1">Dynamic Page</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/apicrud">API Crud</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/crudsystem">CRUDSystem</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/createform">Create Form</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/updateform">Update Form</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/deleteform">Delete Form</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/logout">logout</Link></a></li>
 </ul>
  </div>
</nav>
 </div>
 </header>
 
);

  }
  else {
    return('');
  }
}
export default Header;