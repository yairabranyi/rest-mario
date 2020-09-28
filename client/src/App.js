import React, { useState, useEffect } from 'react'
import './App.css'
// import Products from './components/products/products'
import ProductCard from './components/products/productCard'

function App () {
  const [products, setProducts] = useState(['No items', 'ppppp', 'oooo'])
  //Getting all products
  console.log("State at atart is: ",products);                                           
  const getAllProducts = async () => {
    try {
      const res = await fetch('/products')
      const allProducts = await res.json()
      await setProducts([...allProducts])
      await console.log('The products are: ', products)
    } catch (err) {
      console.log('Got the folowing error: ', err)
    }
  }

  useEffect(allProducts => {
    getAllProducts()
  }, [])
  console.log('allProducts list is: ', products)
  return (
    <div className='App'>
    {products.map((product)=>
     <ProductCard productName={product.productName}
      productDescription={product.productDescription}
      productPrice={product.productPrice}
     
     />

    
    )}
    
    </div>
  )
}

export default App
