import React, { Fragment } from "react";

const AddNewButton = ({ action, icon, variant, ...rest }) => {
  return (
    <Fragment {...rest}>
      <button
        type="button"
        className={`btn btn-${variant} border border-1 rounded rounded-1 rounded-pill mx-2 `}
      >
        <i className={`fa fa-${icon}`} aria-hidden="true" />
        {action}
      </button>
    </Fragment>
  );
};

export default AddNewButton;
