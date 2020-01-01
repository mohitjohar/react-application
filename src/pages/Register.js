import React from 'react';
import { Link } from 'react-router-dom';
class RegisterForm extends React.Component {
  state = {
    email: '',
    password: '',
    alert: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = 'https://reqres.in/api/register';
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
      })
        .then(res => res.json())
        .then(res => {
          if (res.token) {
            alert('Registration is Successfull.');
            this.setState({
              alert: (
                <div className="alert alert-success">Register Successfully</div>
              )
            });
            this.props.history.push('/');
          } else {
            this.setState({
              alert: (
                <div className="alert alert-danger">Somethong went wrong</div>
              )
            });
          }
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="maxw-500 mrtb-100">
          {this.state.alert}
          <fieldset>
            <legend>
              <solid> Registration</solid>
            </legend>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />

            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </fieldset>
          Already have an Account! <Link to="/">LogIn</Link>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
