import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/apicrud/DataTable';
import Loader from '../components/Loader';
import ApiKey from '../components/ApiKey';
import Header from '../components/Header';
import PaginationTable from '../components/apicrud/PaginationTable';

const APICrud = () => {
  // This state used for toggling a loader
  const [loadertoggle, setLoadertoggle] = useState(true);

  // This  is used for store user data list
  const [data, setData] = useState('');

  // fetch all data using this function
  const apiDatashow = () => {
    fetch('/customers')
      .then(results => {
        return results.json();
      })
      .then(data1 => {
        setData(data1);
        setLoadertoggle(false);
      });
  };

  // auto reload
  useEffect(() => {
    apiDatashow();
  }, []);
  // [] is used to prevent fron infinite loop

  // delete method start
  const deleteMethod = i => {
    const url = `/customers/${i}`;
    if (window.confirm('Do you want to delete this?')) {
      setLoadertoggle(true);
      try {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(results => {
            return results.json();
          })
          .then(res => {
            apiDatashow();
            alert('Data Deleted');
          });
      } catch (error) {
        console.error('Deletition Error:', error);
      }
    }
  };
  // delete method end

  // delete All method start
  const deleteAllData = () => {
    const url = `/customers`;
    if (window.confirm('Do you want to delete all data?')) {
      setLoadertoggle(true);
      try {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(results => {
            return results.json();
          })
          .then(res => {
            apiDatashow();
            alert('All Data Deleted');
          });
      } catch (error) {
        console.error('Deletition Error:', error);
      }
    }
  };
  // delete All method end

  return (
    <>
      <Header />
      <div className="container pt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">User list</h4>
          <div>
            <button className="btn btn-danger mr-2" onClick={deleteAllData}>
              Delete All Users
            </button>
            <Link to="adduser">
              <button className="btn btn-primary">Add User</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PaginationTable
              data={data}
              deleteMethod={deleteMethod}
              dataPerPage={6}
              DataTable={DataTable}
            />
          </div>
        </div>
        {loadertoggle && <Loader />}
      </div>
    </>
  );
};

export default APICrud;
