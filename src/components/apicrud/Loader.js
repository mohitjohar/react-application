import React, {useState, useEffect } from 'react';

const Loader = () =>{
    return <div className="loader pos-fixed"><div>
    <i className="fa fa-spinner fa-spin" /> Loading...
  </div></div>
}

export default Loader;