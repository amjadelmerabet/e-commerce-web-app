import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    offer: {
        type: Boolean,
        default: false
    },
    newPrice: {
        type: Number,
        default: 0
    },
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const Product = mongoose.model('Product', productSchema)

export default Product