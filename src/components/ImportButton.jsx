import React, { Fragment } from "react";

const ImportButton = ({ action, icon, variant, ...rest }) => {
  return (
    <Fragment {...rest}>
      <button
        type="button"
        className={`btn btn-${variant} border border-light border-1 rounded rounded-1 rounded-pill `}
      >
        <i className={`fa fa-${icon}`} aria-hidden="true" />
        {action}
      </button>
    </Fragment>
  );
};

export default ImportButton;
