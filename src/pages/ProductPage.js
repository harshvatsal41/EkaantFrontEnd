import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';

const ProductPage = () => {
    const { data: initialProducts, loading, error } = useFetch('http://localhost:9191/home/product');
    const [products, setProducts] = useState([]);
    const [searchActive, setSearchActive] = useState(false);

    useEffect(() => {
        if (!searchActive && initialProducts.length > 0) {
            setProducts(initialProducts);
        }
    }, [initialProducts, searchActive]);

    const handleSearchResults = (searchResults) => {
        console.log('Received search results:', searchResults); // Log the search results
        setProducts(searchResults);  // Update product list with search results
        setSearchActive(true);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Product List</h1>
            {/*<SearchProduct onSearchResults={handleSearchResults} />*/}
            <table className="product-table">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Indexes</th>
                    <th>Data</th>
                </tr>
                </thead>
                <ProductList products={products} />
            </table>
            {products.length === 0 && <p>No products found</p>}
        </div>
    );
};

export default ProductPage;
