import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiKey from './ApiKey';
import Loader from './Loader';

const PostGrid = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(ApiKey.alp1)
      .then(results => {
        return results.json();
      })
      .then(data1 => {
        // here data = parent field from api
        // lists is a variable

        setData(data1.data);
        if (data1.data) {
          setLoader(false);
        }
        console.log('State', data1.data);
      });
  }, []);

  const data1 =
    data &&
    data.map((data, index) => {
      return (
        <div className="col-md-4 mb-4">
          <div className="mb-3">
            <Link to={`/details/${index + 1}`}>
              <img
                src={data.avatar}
                className="post-avatar w-100 rounded-circle"
              />
            </Link>
          </div>
          <strong>Name</strong> {`${data.first_name} ${data.last_name}`}
          <br />
          <strong>Email</strong> {data.email}
        </div>
      );
    });

  return (
    <div className="row">
      {data1}
      {loader ? <Loader /> : ''}
    </div>
  );
};
export default PostGrid;
