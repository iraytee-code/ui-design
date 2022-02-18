import React, { Fragment, useState, useEffect } from "react";
import { FormField, Table } from "../components";
import { Container } from "react-bootstrap";
import axios from "axios";

const CustomerDetailsBody = () => {
  const [tableData, setTableData] = useState([]);
  const getBiodata = async () => {
    try {
      const result = await axios.get("http://localhost:3500/buisnessdata");
      setTableData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBiodata();
  }, []);
  return (
    <Fragment>
      <div className="container overlaping-container">
        <div className="card overlap h-auto">
          <div className="card-header">
            <nav className="navbar navbar-light bg-light">
              <Container fluid>
                <h1 className="navbar-brand">
                  Customers
                  <span className="badge bg-light text-muted fs-4">
                    {tableData.length}
                  </span>
                </h1>
                <form>
                  <FormField.SearchField
                    className="form-control me-2 bg-light border border-1"
                    type="search"
                    placeholder="Find Customer"
                  />
                </form>
              </Container>
            </nav>
          </div>
          <div className="card-body">
            <Table data={tableData} />
            <div className="my-3 w-100 text-center">
              <button className="btn btn-ligh fw-bolder border border-dark rounded-pill">
                Show More <i class="fa fa-sort-desc " aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerDetailsBody;
