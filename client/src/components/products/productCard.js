import React from 'react'
import './products.css'

function ProductCard (props) {
  return (
    <div className='productCard'>
      <h1 className='product-title'>ProductCard</h1>
      <h2>Product Name: {props.productName}</h2>
      <h3>Description: {props.productDescription}</h3>
      <h3>price: {props.productPrice}</h3>
    </div>
  )
}

export default ProductCard
