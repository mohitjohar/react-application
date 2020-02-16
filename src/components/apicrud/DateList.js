import React, { useState, useEffect } from 'react';
import DataTable from './../apicrud/DataTable';

//tdata have filtered data
const DataList = ({
  filterarr,
  setToggle1,
  toggle1,
  setId,
  setLoadertoggle,
  apiDatashow,
  setName,
  setAge,
  setSalary
}) => {
  const deleteItem = i => {
    const url = `http://dummy.restapiexample.com/api/v1/delete/${i}`;
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
            console.log('Delelition Response', res);
            apiDatashow();
            alert('Data Deleted');
          });
      } catch (error) {
        console.error('Deletition Error:', error);
      }
    } else {
    }
  };

  const updateItem = (i, n, a, s) => {
    setToggle1(!toggle1);
    setId(i);
    setName(n);
    setAge(a);
    setSalary(s);
  };

  return (
    <DataTable
      data={filterarr}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  );
};
export default DataList;
