import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import Loader from '../../components/Loader';
import ApiKey from '../../components/ApiKey';

const LoginForm = p => {
  if (localStorage.token) {
    p.history.push('/');
  }
  // fields
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');

  // alert
  const [alert, setAlert] = useState(false);

  // Loader
  const [loader, setLoader] = useState(false);

  const handleSubmit = () => {
    setLoader(true);
    const url = `https://reqres.in/api/login`;
    const data = {
      email,
      password
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
            setLoader(false);
            setAlert(false);
          } else {
            setAlert(true);
            setLoader(false);
            // alert('Enter valid Email or Password');
          }
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log('email', email, 'password', password);

  return (
    <div className="height100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <form
              className="card-body shadow rounded"
              onSubmit={handleSubmit}
              action="javascript:simpleCart.checkout()"
            >
              <div className="mb-3 text-center">
                <h5 className="text-center mb-3">Login</h5>
                <img src={logo} className="formlogo" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  className={alert ? 'form-control is-invalid' : 'form-control'}
                  placeholder="Your Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                  Please Enter Valid Emial or Password
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className={alert ? 'form-control is-invalid' : 'form-control'}
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="small">
                  Don't have an Account? <Link to="/register">SignUp Here</Link>
                </span>
                <button className="btn btn-primary" type="submit">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loader ? <Loader /> : ''}
    </div>
  );
};

export default LoginForm;
