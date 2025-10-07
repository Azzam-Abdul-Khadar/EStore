import React from "react";
import { getCategories } from "@/library";
import Container from "../components/Home/Container";

const StoreLayout = ({ children }) => {
  return (
    <Container className="grid grid-cols-5 gap-3">
      <CategoryListing />
      {children}
    </Container>
  );
};

export default StoreLayout;

const CategoryListing = async () => {
  const data = await getCategories();
  return (
    <div className="">
      <div className="text-xl my-3 text-center">Categories</div>
      <ul>
        {/* {
              data.map((data,item)=><li key={"category-" + i}>{data}</li> )
            } */}
        {data.map((d, i) => (
          <li className="p-2 border my-2" key={"category-" + i}>
            {d.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
