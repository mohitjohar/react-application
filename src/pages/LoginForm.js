import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = p => {
  if (localStorage.token) {
    p.history.push('/');
  }
  // fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState('');

  const handleSubmit = () => {
    const url = 'https://reqres.in/api/login';
    const data = {
      email: 'eve.holt@reqres.in',
      password: 'pestol'
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
            localStorage.setItem('token', res.token);
            console.log('token:', res.token);
            p.history.push('/');
            window.location.reload();
            alert('Login Successfully');
          } else {
            alert('Enter valid Email or Password');
          }
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log('email', email, 'password', password);

  return (
    <div className="container">
      <form
        className="maxw-500 mrtb-100"
        onSubmit={handleSubmit}
        action="javascript:simpleCart.checkout()"
      >
        <fieldset>
          <legend> Login</legend>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
        </fieldset>
        Don't have an Account? <Link to="/register">SignUp Here</Link>
      </form>
    </div>
  );
};

export default LoginForm;
