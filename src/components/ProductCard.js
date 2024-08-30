import React, { Suspense, lazy } from 'react';
const LazyLoadImageComponent = lazy(() => import('./LazyLoadImageComponent'));

const ProductCard = ({ product }) => {
    return (
        <>
            <tr>
                <td rowSpan="3">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadImageComponent src={product.imageURL} alt={product.name} />
                    </Suspense>
                </td>
                <td><strong>Name:</strong></td>
                <td>{product.name}</td>
            </tr>
            <tr>
                <td><strong>Description:</strong></td>
                <td>{product.description}</td>
            </tr>
            <tr>
                <td><strong>Price:</strong></td>
                <td>${product.price.toFixed(2)}</td>
            </tr>
        </>
    );
};

export default ProductCard;
