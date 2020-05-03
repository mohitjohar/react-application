// useState use for State in Function component
// useEfffect use as componentDidMount() function in function component
import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import ApiKey from '../../components/ApiKey';

const Details = ({ match }) => {
  // here data is state variable, setData is a function whitch have value of data variable
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();
  // const [data, setData] = useState('mohit');
  useEffect(
    () => {
      // here match is a prop
      // 'match.params.detailId' have page id , this is used for dynamic page, detailId is props value from Router in the pages.js file
      fetch(`${ApiKey.api1}/customer/read/${match.params.detailId}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          // update value of data state variable
          setData(data);
          setLoader(false);
        });
    },
    []
    // here '[]' is used for, loop se bachne k liye
  );

  return (
    <>
      <Header />
      <div className="main pt-3">
        <div className="container">
          <div className="mb-3">
            <img
              src={data && data.image}
              className="post-avatar rounded-circle"
            />
          </div>
          <p>
            <strong>User Name:</strong> {data && data.name}
          </p>
          <p>
            <strong>User Email:</strong> {data && data.email}
          </p>
        </div>

        {loader ? <Loader /> : ''}
      </div>
    </>
  );
};

export default Details;
