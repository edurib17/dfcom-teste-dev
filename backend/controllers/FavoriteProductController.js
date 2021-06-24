import asyncHandler from 'express-async-handler'
import Favorite from '../models/FavoriteProductModel.js'


const addProductFavorite = asyncHandler(async (req, res) => {
    const { name, image, price } = req.body

    const favorite = new Favorite({
        user: req.user._id,
        name,image,price
    })
    const createdFavorite = await favorite.save()
    res.status(201).json(createdFavorite)
})


const getProductFavoriteById = asyncHandler(async (req, res) => {
    const favorites = await Favorite.find({ user: req.user._id })
    res.json(favorites)
})

export { addProductFavorite, getProductFavoriteById }