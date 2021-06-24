import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan';

import connect from './config/config.js';
import { notFound, errorHandle } from './middleware/errorMiddleware.js';

import userRoutes from './routes/UserRoutes.js';
import productRoutes from './routes/ProductRoutes.js';
import favoritesRoutes from './routes/FavoriteProduct.js';

dotenv.config();

connect();

const app = express();

app.use(express.json())

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/favorites', favoritesRoutes);

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use(notFound)
app.use(errorHandle)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`\u{1F525} Server running in port ${PORT}`.green))