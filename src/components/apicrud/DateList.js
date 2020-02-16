import React from 'react';
import DataTable from './././DataTable';
import PaginationNav from './PaginationNav';

//tdata have filtered data
const DataList = ({
  data,
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
            console.log('Delelition Response', res, i);
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
    <PaginationNav
      data={data}
      deleteItem={deleteItem}
      updateItem={updateItem}
      dataPerPage={7}
      btnPerPage={3}
      DataTable={DataTable}
    />
  );
};
export default DataList;
