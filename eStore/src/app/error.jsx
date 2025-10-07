"use client"

import React from 'react'
import Container from './components/Home/Container'
const error = () => {
  return (
    <Container className='col-span-4'>
        <h1 className='text-3xl font-bold text-red-600 text-center my-3'>
            Something wents wrong!
        </h1>
    </Container>
)
}

export default error