import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <tbody>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </tbody>
    );
};

export default ProductList;
