import React, { Fragment } from "react";
import { CustomerDetailsHeader, EmptyCustomerCard } from "../components";
import { Container } from "react-bootstrap";

const CustomerDetailsBlank = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-dark">
        <CustomerDetailsHeader />
        <Container overlaping-container>
          <EmptyCustomerCard />
        </Container>
      </div>
    </Fragment>
  );
};

export default CustomerDetailsBlank;
