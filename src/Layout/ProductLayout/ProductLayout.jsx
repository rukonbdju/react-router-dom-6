import React from "react";
import SearchLink from "../../SearchLink/SearchLink";
import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <nav>
        <Link to='/phones'>ALL</Link>
        <SearchLink brand={"apple"}>Apple</SearchLink>
        <SearchLink brand={"google"}>Google</SearchLink>
        <SearchLink brand={"samsung"}>Samsung</SearchLink>
      </nav>
      ;<Outlet></Outlet>
    </>
  );
};

export default ProductLayout;
