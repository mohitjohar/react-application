import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiKey from '../../../components/ApiKey';
import Loader from '../../../components/Loader';
import Header from '../../../components/Header';

const AddUser = p => {
  // form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  // const [description, setDescription] = useState('');

  // Loader
  const [loader, setLoader] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const url = `${ApiKey.api1}/customer/create`;
    const adata = {
      name,
      email,
      image
    };
    setLoader(true);

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adata)
      }).then(res => {
        if (res.status == 200) {
          setLoader(false);
          p.history.push('/apicrud');
        }
      });
    } catch (error) {
      console.error('Creation Error:', error);
    }
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
              {/* <div className="col-md-12 mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  required="required"
                  placeholder="Enter Description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <div className="invalid-feedback">Please Enter description</div>
              </div> */}
              <div className="col-md-12 mb-3 text-right">
                <input type="submit" className="btn btn-primary" value="Add" />
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
