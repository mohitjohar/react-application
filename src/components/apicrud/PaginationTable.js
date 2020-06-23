import React, { useState } from 'react';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css'; // for css

const PaginationTable = ({
  data,
  dataPerPage = 10,
  DataTable,
  deleteMethod
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

  return (
    <div className="mkpaginationtable">
      <DataTable
        data={data.slice(indexOfFirstData, indexOfLastData)}
        deleteMethod={deleteMethod}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={pageNumbers.length}
        changeCurrentPage={handleClick}
        theme="square-fill"
      />
    </div>
  );
};

export default PaginationTable;
