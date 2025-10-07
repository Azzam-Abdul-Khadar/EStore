const getCategories = async () => {
    // const response = await fetch ('https://dummyjson.com/products/categories')
    const response = await fetch ('https://fake-store-api.mock.beeceptor.com/api/products/category')
    const data = await response.json()
    return data; 
}

const getProducts = async (product_id = null) =>{
    // const response = await fetch ('https://dummyjson.com/products');
    // const response = await fetch ('https://fake-store-api.mock.beeceptor.com/api/products');

    try{
        let API = 'https://fake-store-api.mock.beeceptor.com/api/products';
        if(product_id != null){
            API += '/' + product_id;
        }
        console.log(product_id);
        
        const response = await fetch (API);
        const data = await response.json();
        return product_id == null? data.products: data;
    }catch(error){
        console.log(error.message);
        return null;
    }

}


export {getCategories, getProducts}



//https://dummyjson.com/products/1