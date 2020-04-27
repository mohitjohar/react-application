import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ApiKey from '../ApiKey';
import Loader from '../Loader';
import Header from '../Header';

const AddUser = () => {
  // form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  // Loader
  const [loader, setLoader] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const url = `http://localhost/phpapi/api/customers/create.php`;
    const adata = {
      name: name,
      email: email,
      description: 'The best pillow for amazing programmers.',
      image: image,
      created: '2018-06-01 00:35:07'
    };
    setLoader(true);

    axios
      .post(url, adata)
      .then(res => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });

    // try {
    //   fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify(adata),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log('Creation Response:', res);
    //       setLoader(false);
    //     });
    // } catch (error) {
    //   console.error('Creation Error:', error);
    // }
  };

  return (
    <>
      <Header />
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="mb-0">Add User</h4>
              <Link to="/apicrud">
                <button className="btn btn-secondary">
                  <i className="fa fa-arrow-right" />
                </button>
              </Link>
            </div>
            <form className="form-row" onSubmit={handleSubmit}>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                  placeholder="Enter Unique Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <div className="invalid-feedback">Please Enter Valid Name</div>
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required="required"
                  placeholder="Enter Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">Please Enter Valid Email</div>
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  name="Image"
                  className="form-control"
                  required="required"
                  placeholder="Enter Image"
                  value={image}
                  onChange={e => setImage(e.target.value)}
                />
                <div className="invalid-feedback">
                  Please Enter Valid Salery
                </div>
              </div>
              <div className="col-md-12 mb-3 text-right">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {loader ? <Loader /> : ''}
    </>
  );
};

export default AddUser;
