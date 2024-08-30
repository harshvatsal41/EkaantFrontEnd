import axios from 'axios';

const API_URL = 'http://localhost:9191/home/product';

export const fetchProducts = () => {
    return axios.get(API_URL);
};

export const searchProducts = (keyword) => {
    return axios.post(`${API_URL}/search`, { keyword });
};

export const addProduct = (productData, file) => {
    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify(productData)], { type: "application/json" }));
    formData.append('file', file);

    return axios.post(`${API_URL}/add`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};


