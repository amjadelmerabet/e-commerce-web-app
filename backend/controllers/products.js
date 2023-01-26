import Product from '../models/product.js';

export const getProducts = async (request, response) => {
    try {
        const product = await Product.find();
        response.status(200).json(product);
    } catch (error) {
        response.status(404).json({ message: error });
    }
};

export const createProduct = async (request, response) => {
    const product = request.body;
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        response.status(201).json(newProduct);
    } catch (error) {
        response.status(409).json({ message: error });
    }
};
