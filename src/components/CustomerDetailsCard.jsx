import React from "react";
import {
  CustomerDetailsHeader,
  CustomerDetailsBody,
  // CustomerEmpty,
} from "../components";

const CustomerDetailsCard = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <CustomerDetailsHeader />
        <CustomerDetailsBody />
        {/* <CustomerEmpty /> */}
      </div>
    </>
  );
};

export default CustomerDetailsCard;
