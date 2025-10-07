"use client"

import React from "react";
import Container from "../components/Home/Container";

const error = () => {
  return (
    <Container className='col-span-4 my-4'>
      <h1 className="text-3xl font-bold text-red-600 text-center my-3">
        Something went wrong while Fetching Products!
      </h1>
    </Container>
  );
};

export default error;
