import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiKey from '../ApiKey';
import Loader from '../Loader';
import Header from '../Header';

const UpdateForm = ({ match }) => {
  // form fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');

  // Loader
  const [loader, setLoader] = useState(true);

  // form alerts
  const [agea, setAgea] = useState(false);
  const [salarya, setSalarya] = useState(false);

  useEffect(() => {
    const url = ApiKey.api;
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data1 => {
        setName(data1.data[match.params.detailId - 1].employee_name);
        setAge(data1.data[match.params.detailId - 1].employee_age);
        setSalary(data1.data[match.params.detailId - 1].employee_salary);
        setLoader(false);
        console.log('mkData List', data1);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // validation
    if (age > 110) {
      setAgea(true);
      setAge('');
    }

    if (salary > 10000000) {
      setSalarya(true);
      setSalary('');
    }

    if (age < 110 && salary < 10000000) {
      const url = ApiKey.apiupdate + match.params.detailId;
      const data12 = {
        name: 'mohit',
        salary: '34',
        age: '45'
      };
      setAgea(false);
      setSalarya(false);
      setLoader(true);
      try {
        fetch(url, {
          method: 'PUT',
          body: JSON.stringify(data12),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(res => {
            console.error('Updation Response:', res);
            setLoader(false);
          });
      } catch (error) {
        console.error('Updattion Error:', error);
      }
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
                  type="number"
                  name="age"
                  className={agea ? 'form-control is-invalid' : 'form-control'}
                  required="required"
                  placeholder="Enter Age"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                />
                <div className="invalid-feedback">Please Enter Valid Age</div>
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="number"
                  name="salery"
                  className={
                    salarya ? 'form-control is-invalid' : 'form-control'
                  }
                  required="required"
                  placeholder="Enter Salary"
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
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

export default UpdateForm;
