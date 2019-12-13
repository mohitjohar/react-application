import React from 'react'
import { Link } from 'react-router-dom'
class LoginForm extends React.Component {
  constructor(props){
    super(props);
    if(localStorage.token){
    this.props.history.push('/')
    }
  }
  state = {
    email: "",
    password: "",
    token: '',
    alert: ''
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = 'https://reqres.in/api/login';
    const data = {
      email: this.state.email,
      password: this.state.password
    };

    try {
     fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        if(res.token){
          localStorage.setItem('token', res.token);
          this.props.history.push('/')
          window.location.reload()
          this.setState({ alert: <div className="alert alert-success">Login Successfully</div> })
          alert("Login Successfully")
        }
        else{
          this.setState({ alert: <div className="alert alert-sm alert-danger">Please enter valid username or password</div> })
        }
      });
          
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
if(localStorage.token){
 return ('you have logged in');
}else{
    return (
  
<div className="container">
<form onSubmit={this.handleSubmit} className="maxw-500 mrtb-100">
    {this.state.alert}
<fieldset>
<legend> Login</legend>
<input type="text" name="email" className="form-control" placeholder="Your Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
<input type="password" name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
<button className="btn btn-primary" type="submit">Log In</button>

</fieldset>
Don't have an Account?  <Link to="/register">SignUp Here</Link>
</form>
</div>

    );
}
  }

}

export default LoginForm;
