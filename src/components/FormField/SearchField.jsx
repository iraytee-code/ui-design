import React from "react";
import PropTypes from "prop-types";

const SearchField = (props) => {
  const { type, ...rest } = props;
  return (
    <>
      <input
        className="form-control me-2 bg-light border border-1"
        type={type}
        {...rest}
      />
    </>
  );
};

SearchField.defaultProps = {
  type: PropTypes.string,
};

export default SearchField;
