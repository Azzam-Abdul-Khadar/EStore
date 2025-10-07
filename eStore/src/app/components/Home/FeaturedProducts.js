import React from 'react'
import Container from './Container';
import ProductBox from '../ProductBox';

const FeaturedProducts = async () => {
const response = await fetch('https://fake-store-api.mock.beeceptor.com/api/products')
const data = await response.json();

  return (
    <div className='p-3'>
      <Container >
        <h1 className='text-center text-3xl font-bold'>Featured Products</h1>
        <div className="grid grid-cols-5 gap-3 my-4">
          {
            data.map((product)=>{
              return <ProductBox key={product.product_id} product={product} />
            })
          }
        </div>
      </Container>
    </div>
  )
}

export default FeaturedProducts