import express from 'express';

// const app = express();

// import Product from '../models/product.js'

import { getProducts, createProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/products', getProducts);

router.post('/products', createProduct);

// router.get('/products', paginatedResults(Product), (response, request) => {
//     response.json(response.paginatedResults)
// })

// function paginatedResults(model) {
//     return async (request, response, next) => {
//         const page = parseInt(request.query.page) || 1;
//         const recordsPerPage = parseInt(request.query.limit) || 5;

//         const startIndex = (page - 1) * recordsPerPage;
//         const endIndex = page * recordsPerPage;

//         const results = {}

//         if(endIndex < await model.countDocuments().exec()) {
//             results.next = {
//                 page: page + 1,
//                 limit: recordsPerPage
//             }
//         }

//         if(startIndex > 0) {
//             results.previous = {
//                 page: page - 1,
//                 limit: recordsPerPage
//             }
//         }

//         try {
//             results.results = await model.find().limit(recordsPerPage).skip(startIndex).exec()
//             response.paginatedResults = results
//             next()
//         } catch (error) {
//             response.status(500).json({ message: error })
//         }
//     }
// }

export default router;
