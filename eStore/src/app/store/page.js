import React from "react";
import { getProducts } from "@/library";
import ProductBox from "../components/ProductBox";

const StorePage = () => {
  return <ProductListing />;
};

export default StorePage;

const ProductListing = async () => {
  const data = await getProducts();
  console.log(data);
  return (
    <div className="col-span-4 grid grid-cols-3 gap-5">
      {/* {
        data.map((data)=><ProductBox  product={data} key={"product-" + data.id}/>)
      } */}
      {data.map((d) => (
        <ProductBox product={d} key={"product-" + d.product_id} />
      ))}
    </div>
  );
};



// 'use client'
// import React, { useEffect, useState } from 'react'
// import { getProducts } from '@/library'
// import ProductBox from '../components/ProductBox'

// const StorePage = () => {
//   <ProductListing/>
// }
// export default StorePage


// const ProductListing = () => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getProducts()
//         console.log("Fetched products:", data) // 👀 debug
//         setProducts(data || [])  // fallback to []
//       } catch (err) {
//         console.error("Error fetching products:", err)
//         setProducts([]) // fallback
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchData()
//   }, [])

//   if (loading) {
//     return <div className="col-span-4">Loading products...</div>
//   }

//   if (products.length === 0) {
//     return <div className="col-span-4">No products available</div>
//   }

//   return (
//     <div className="col-span-4 grid grid-cols-3 gap-4">
//       {products.map((product) => (
//         <ProductBox product={product} key={"product-" + (product.id || product.product_id)} />
//       ))}
//     </div>
//   )
// }

