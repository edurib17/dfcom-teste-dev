import asyncHandler from 'express-async-handler'
import Product from '../models/ProductsModel.js'


const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})


const createProduct = asyncHandler(async (req, res) => {
    const { name, image, price } = req.body
    const product = new Product({ name, image, price })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})



export { getProducts,createProduct }