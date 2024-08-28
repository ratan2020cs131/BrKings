import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Slices/Cart";
import Veg from "../../Images/VEG.png";
import ProductCard from './ProductCard';

const LikeProduct = () => {

    const { products } = useSelector(state => state.item);

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-4">
              {products &&
                products.slice(0, 3).map((product) => (
                  <div key={product._id}>
                    <ProductCard product={product} image={product.images[0]} />
                  </div>
                ))}
            </div>
        </>
    )
}

export default LikeProduct;