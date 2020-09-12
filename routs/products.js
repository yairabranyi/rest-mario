const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

//GET BACK ALL THE PRODUCTS
router.get('/', async (req, res) => {
  console.log('Getting all products')
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.json({ message: err })
  }
})

//ADD A PRODUCT
router.post('/', async (req, res) => {
  const product = new Product({
    //create a new productobject by the Product schema
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    productPrice: req.body.productPrice
  })
  try {
    console.log("New product added" ,req.body.productName );
    const savedProduct = await product.save()
    res.json(savedProduct)
    // console.log("New product json is:" ,savedProduct );
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
