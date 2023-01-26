import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { getUsers } from './actions/users'
// import { getProducts } from './actions/products';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './routes/home/Home';
import Products from './routes/products/Products';
import Product from './routes/product/Product';
import Cart from './routes/cart/Cart';
import Register from './routes/register/Register';
import Login from './routes/login/Login';
import Admin from './routes/admin/Admin';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Services from './routes/services/Services';
import Refund from './routes/refund/Refund';
import WishList from './routes/wishlist/WishList';

import './App.css';

function App() {
    const dispatch = useDispatch();

    // This function is used for getting all the users from the database
    useEffect(() => {
        // dispatch(getUsers());
    }, [dispatch]);

    // {/* <Route path="/products" element={<Products />} /> */}
    // {/* <Route path="/product/:id" element={<Product />} /> */}

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:urlCategory" element={<Products />} />
                <Route path="/product/:_id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/services" element={<Services />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/wishlist" element={<WishList />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
