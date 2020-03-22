import React from 'react';
import { Link } from 'react-router-dom';

const DataTable = ({ data, deleteItem }) => {
  return (
    <>
      <div className="overflow-auto">
        <table className="datalist table table-striped">
          <thead>
            <tr>
              <th className="id">Id</th>
              <th className="name">Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th className="action" />
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(d => {
                return (
                  <tr>
                    <td className="id">{d.id}</td>
                    <td className="name">{d.employee_name}</td>
                    <td>{d.employee_age}</td>
                    <td>{d.employee_salary}</td>
                    <td className="action">
                      <Link to={`/update/${d.id}`}>
                        <button className="btn btn-info mr-2">Update</button>
                      </Link>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
