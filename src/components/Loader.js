import React from 'react';
import logo from '../img/logo.png';

const Loader = () => {
  return (
    <div className="position-fixed h-100 w-100 bg-white left-0 top-0 d-flex justify-content-center align-items-center">
      <div>
        <img src={logo} className="loaderlogo" />
      </div>
    </div>
  );
};

export default Loader;
