"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import ProductBox from "../ProductBox";


const RecentlyAdded = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const getProducts = async () => {
      const response = await fetch(
        "https://fake-store-api.mock.beeceptor.com/api/products"
      );
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="bg-gray-200 p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold my-4">
          Recently Added Products
        </h1>
        <div className="grid grid-cols-5 gap-2">
          {products.map((product) => {
            return <ProductBox key={product.product_id} product={product} />;
          })}
          {/*           
            {products && products.length > 0 ? (
              products.map((prod) => (
                <div key={prod.id} product={prod}>{prod.name}</div>
              ))
            ) : (
              <p>Loading...</p> // Or a spinner/error message
            )} */}

          {/* <ProductBox/>
          <ProductBox/>
          <ProductBox/>
          <ProductBox/>
          <ProductBox/>
          <ProductBox/>
          <ProductBox/>
          <ProductBox/>
          <ProductBox/> */}
        </div>
      </Container>
    </div>
  );
};

export default RecentlyAdded;
