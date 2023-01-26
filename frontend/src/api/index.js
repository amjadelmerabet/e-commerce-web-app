import axios from 'axios';

const usersURL = 'http://localhost:5000/users';
const productsURL = 'http://localhost:5000/products';

export const fetchUsers = () => axios.get(usersURL);
export const fetchProducts = () => axios.get(productsURL);

export const createProduct = (newProduct) =>
    axios.post(productsURL, newProduct);
export const createUser = (newUser) => axios.post(productsURL, newUser);
