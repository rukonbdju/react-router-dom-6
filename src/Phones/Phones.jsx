import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const Phones = () => {
  let { phones } = useProducts();
  let [searchParams] = useSearchParams();
  let query = searchParams.get("brand");
  let products = useMemo(() => {
    if (!query) return phones;
    return phones.filter(
      (phone) => phone?.brand.toLowerCase() === query.toLowerCase()
    );
  }, [query]);

  return (
    <div className="products">
      {products.map((phone) => (
        <div className="product" phone={phone} key={phone.model}>
          <h1>Brand:{phone.brand}</h1>
          <h1>Color:{phone.color}</h1>
          <h1>Price:{phone.price}</h1>
          <Link to={`/phones/${phone.model}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Phones;
