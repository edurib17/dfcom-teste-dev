import express from 'express';

import { getProducts, createProduct } from '../controllers/ProductController.js';


const router = express.Router()


router.route('/').get(getProducts).post(createProduct)


export default router