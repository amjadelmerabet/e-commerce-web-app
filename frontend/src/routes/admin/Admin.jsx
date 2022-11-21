import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createProduct } from "../../actions/products";
import FileBase from 'react-file-base64';

import './Admin.css';


function Admin() {

    const [productData, setProductData] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        image: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productData))
    }

    // async function reduce_image_size(base64Str, MAX_WIDTH = 450, MAX_HEIGHT = 450) {
    //     let resized_base64 = await new Promise((resolve) => {
    //         let img = new Image()
    //         img.src = base64Str
    //         img.onload = () => {
    //             let canvas = document.createElement('canvas')
    //             let width = img.width
    //             let height = img.height
    //             if(width > height && width > MAX_WIDTH) {
    //                 height *= MAX_WIDTH / width
    //                 width = MAX_WIDTH
    //             }
    //             if(height > width && height > MAX_HEIGHT) {
    //                 width *= MAX_HEIGHT / height
    //                 height = MAX_HEIGHT
    //             }
    //             canvas.width = width
    //             canvas.height = height
    //             let ctx = canvas.getContext('2d')
    //             ctx.drawImage(img, 0, 0, width, height)
    //             resolve(canvas.toDataURL())
    //         }
    //     })
    //     return resized_base64
    // }

    return (
        <div className="admin">
            <h2>Add Products</h2>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value })}>
                        <option value={null}>None</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Bread">Bread</option>
                        <option value="T-shirts">T-shirts</option>
                    </Form.Select>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                    <Form.Label>Image</Form.Label>
                    <div className="file-input">
                        <FileBase type="file" multiple={false} onDone={({base64}) => setProductData({ ...productData, image: base64})} />
                    </div>
                    <Button type="submit">Add Product</Button>
                </Form>
            </Container>
        </div>
    );
}

export default Admin;