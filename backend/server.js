import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/', userRoutes);
app.use('/', productRoutes);

const DATABASE_URL =
    'mongodb+srv://username:password@cluster0.agnqh.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
    .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    )
    .catch((error) => console.log(error));

// mongoose.set('useFindAndModify', false)
