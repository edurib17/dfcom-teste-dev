import mongoose from 'mongoose'

const favoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true
})

const Favorites = mongoose.model('Favorites', favoriteSchema)

export default Favorites