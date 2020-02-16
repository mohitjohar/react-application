import React from 'react';

const DataTable = ({ data, deleteItem, updateItem }) => {
  return (
    <>
      <table className="datalist">
        <tr className="static-top">
          <th className="id">Id</th>
          <th className="name">Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th className="action"></th>
        </tr>
        {data &&
          data.map((d, index) => {
            return (
              <tr>
                <td className="id">{d.id}</td>
                <td className="name">{d.employee_name}</td>
                <td>{d.employee_age}</td>
                <td>{d.employee_salary}</td>
                <td className="action">
                  <button
                    className="btn btn-info"
                    index={d.id}
                    onClick={() =>
                      updateItem(
                        d.id,
                        d.employee_name,
                        d.employee_age,
                        d.employee_salary
                      )
                    }
                  >
                    Update
                  </button>{' '}
                  <button
                    className="btn btn-danger"
                    index={d.id}
                    onClick={() => deleteItem(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
};

export default DataTable;
