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
    console.log('New product added:', req.body.productName)
    const savedProduct = await product.save()
    res.json(savedProduct)
    // console.log("New product json is:" ,savedProduct );
  } catch (err) {
    res.json({ message: err })
  }
})

//GET BACK A SPECIFIC PRODUCT BY ITS "productName"
router.get('/:productName', async (req, res) => {
  try {
    const product = await Product.findOne({
      productName: req.params.productName
    })
    res.json(product)
    console.log('Getting one item:', product.productName)
  } catch (err) {
    res.json({ errMessage: err })
  }
})
// DELETE A PRODUCT
router.delete('/:productName', async (req, res) => {
  try {
    console.log('Deleting Product')
    const removedProduct = await Product.deleteOne({
      productName: req.params.productName
    })
    res.json(removedProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

// UPDATE PRODUCT

router.patch('/:productName', async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { productName: req.params.productName },
      { $set: { productPrice: req.body.productPrice } }
    )
    res.json(updatedProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
