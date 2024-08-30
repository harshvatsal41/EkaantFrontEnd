import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';

function App() {
    const [message, setMessage] = useState('');

    const showAlert = () => {
        setMessage('Button was clicked!');
        alert('Button was clicked!');
    };

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/products">Product List</Link></li>
                        <li><Link to="/add-product">Add New Product</Link></li>
                    </ul>
                </nav>

                <button onClick={showAlert}>Click Me</button>
                {message && <p>{message}</p>}

                <Routes>
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/add-product" element={<AddProductPage />} />
                    <Route path="/" element={
                        <div>
                            <h1>Welcome to the Product App</h1>
                            <p>Click the button above to see an alert.</p>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
