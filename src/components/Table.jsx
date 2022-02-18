import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">BALANCE / DUE</th>
            <th scope="col">OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr className="my-1" key={index}>
              <td className="d-flex align-item-center">
                <span className="badge name-bg text-dark text-center align-item-center d-flex fs-4 me-2">
                  {item.name[0]}
                </span>
                <span>
                  <h6 className="fw-bolder m-0 p-0">{item.name}</h6>
                  <small className="text-muted">{item.buisnessName}</small>
                </span>
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.balance}</td>
              <td>
                <button className="btn btn-sm align-item-center btn-bg">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
