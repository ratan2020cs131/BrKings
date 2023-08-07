// Cart.js

import { React, useState, useEffect } from 'react';
import "./Cart.css";
import CartProduct from "./CartProduct";
import { useNavigate } from 'react-router-dom';
import EmptyCart from "../../Images/Free market or Amazon.jpeg";

const fetchProducts = () => {
    // Simulating API call to fetch products
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Product 1', price: 19.99 },
                { id: 2, name: 'Product 2', price: 29.99 },
                { id: 3, name: 'Product 3', price: 39.99 },
                // Add more products here
            ]);
        }, 1500); // Simulating a delay of 1.5 seconds
    });
};


const ShoppingCart = () => {


    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);



    const totalAmount = 0;
    const navigation = useNavigate()
    const [isEmpty, setisEmpty] = useState(false);
    // setisEmpty(true)

    if (isEmpty) {
        return (
            <div className='container'>
                <div className='subContainer'>
                    <img src={EmptyCart} alt='Empty Cart' />
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't made any choice yet</p>
                    <button type="button" className="mt-4 rounded-md bg-rose-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => navigation("")}>Back to Home Page</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='header'>
                <div className=" cart-container">
                    <ul className="cart-items">
                        <li>
                            <div id='itemHeading'>
                                <p style={{ flex: 2 }}>Product</p>
                                <p style={{ flex: 1 }}>Quantity</p>
                                <p>Total</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                {loading ? (
                                    <div className="text-center">Loading...</div>
                                ) : (
                                    <div className="grid gap-4">
                                        {products.map((product) => (
                                            <div key={product.id} className="border p-4 rounded-lg shadow-md">
                                                <h2 className="text-xl font-bold">{product.name}</h2>
                                                <p className="text-gray-600">{`$${product.price.toFixed(2)}`}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row mt-3 justify-center'>
                    <button className=" rounded-md bg-amber-600 px-2 py-1.5 lg:mx-6 text-xl font-semibold leading-10 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-1/3">Continue shopping</button>
                    <button className=" rounded-md bg-amber-600 px-2 py-1.5 lg:mx-6 text-xl font-semibold leading-10 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-1/3">Checkout</button>
                    <div className=" cart-total text-4xl font">Total: ₹{totalAmount}</div>
                </div>
            </div>
        )
    }

}



const Cart = () => {


    return (
        <div className='cart'>
            <div id='header'>
                <p>YOUR CART</p>
            </div>
            <ShoppingCart />
        </div>
    );
};

export default Cart;
