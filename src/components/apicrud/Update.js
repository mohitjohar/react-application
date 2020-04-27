import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiKey from '../ApiKey';
import Loader from '../Loader';
import Header from '../Header';

const UpdateForm = ({ match }) => {
  // form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('hello , my name mohit');
  const [created, setCreated] = useState('2018-06-01 00:35:07');

  // Loader
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const url = `${ApiKey.api}/customers/read_one.php?id=${match.params.detailId}`;
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data1 => {
        setName(data1.name);
        setEmail(data1.email);
        setImage(data1.image);
        setDescription(data1.description);
        setLoader(false);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const url = `${ApiKey.api}/customers/update.php`;
    const adata = {
      id: match.params.detailId,
      name: name,
      email: email,
      description: description,
      image: image,
      created: created
    };
    setLoader(true);

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adata)
      })
        .then(res => res.json())
        .then(res => {
          console.log('Creation Response:', res);
          setLoader(false);
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
              <h4 className="mb-0">Edit User</h4>
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
              <div className="col-md-12 mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  required="required"
                  placeholder="Enter Description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
                <div className="invalid-feedback">Please Enter description</div>
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

export default UpdateForm;
