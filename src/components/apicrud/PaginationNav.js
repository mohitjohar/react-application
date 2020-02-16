import React, { useState, useEffect } from 'react';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css'; //for css

const PaginationNav = ({
  data,
  dataPerPage = 10,
  btnPerPage = 3,
  DataTable,
  deleteItem,
  updateItem
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = event => {
    setCurrentPage(event);
  };

  // Logic for displaying data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  //
  //
  //
  //
  //
  //
  //
  // Logic for displaying btn numbers
  const btnNumbers = [];
  for (let i = 1; i <= Math.ceil(pageNumbers.length / btnPerPage); i++) {
    btnNumbers.push(i);
  }

  return (
    <>
      <DataTable
        data={data.slice(indexOfFirstData, indexOfLastData)}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={btnNumbers.length}
        changeCurrentPage={handleClick}
        theme="square-fill"
      />
    </>
  );
};

export default PaginationNav;
