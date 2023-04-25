import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchLink = ({ brand, children, ...props }) => {
  return (
    <Link
      to={`/phones/?brand=${brand}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SearchLink;
