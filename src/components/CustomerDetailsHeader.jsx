import React from "react";
import { AddNewButton } from "../components";
import { ImportButton } from "../components";

const CustomerDetailsHeader = ({ title }) => {
  return (
    <div>
      <div className="container  py-5 d-flex justify-content-between">
        <div className="title">
          <div className="h1 text-white">{title}</div>
        </div>
        <div>
          <AddNewButton
            action="New"
            variant="light"
            icon="user-plus"
            className="border-1 rounded rounded-1 rounded-pill mx-2"
          />
          <ImportButton
            action="Import from invoice"
            variant="dark"
            icon="clipboard"
            className="border border-light border-1 rounded rounded-1 rounded-pill"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsHeader;

CustomerDetailsHeader.defaultProps = {
  title: "Customers",
};
