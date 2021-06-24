import express from 'express';
import { addProductFavorite, getProductFavoriteById } from '../controllers/FavoriteProductController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/').post(protect, addProductFavorite)
router.route('/myfavorites').get(protect, getProductFavoriteById)



export default router
