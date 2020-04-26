import React from 'react';
import { Link } from 'react-router-dom';

const DataTable = ({ data, deleteMethod }) => {
  return (
    <>
      <div className="overflow-auto">
        <table className="datalist table table-striped table-hover">
          <thead>
            <tr>
              <th className="id">Id</th>
              <th className="name">Name</th>
              <th>Image</th>
              <th className="action" />
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(d => {
                return (
                  <tr>
                    <td className="id">{d.id}</td>
                    <td className="name">{d.name}</td>
                    <td>{d.image}</td>
                    <td className="action">
                      <Link to={`/update/${d.id}`}>
                        <button className="btn btn-info mr-2">Update</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        index={d.id}
                        onClick={() => deleteMethod(d.id)}
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
