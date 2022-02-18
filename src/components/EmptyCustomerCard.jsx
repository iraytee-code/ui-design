import React, { Fragment } from "react";
import { ImageCard, ImportButton } from "../components";
const EmptyCustomerCard = () => {
  return (
    <Fragment>
      <div className="card overlap h-auto">
        <div className="card-body text-center m-auto py-5">
          <ImageCard />
          <div className="fw-bold fs-5 dark">No saved Customer</div>
          <p className="text-center">
            You have not saved any customer information. Add a <br />
            customer Now
          </p>
          <div className="my-3 w-100 text-center border-1 rounded rounded-1 rounded-pill">
            <ImportButton
              action="New Customer"
              variant="dark"
              icon="user-plus"
              className="border border-light border-1 rounded rounded-1 rounded-pill"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmptyCustomerCard;
