import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Slices/Cart";
import Veg from "../../Images/VEG.png";
import ProductCard from './ProductCard';

const LikeProduct = () => {

    const { products } = useSelector(state => state.item);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(products));
    };

    const clickHandeler = () =>{
        window.location.reload();
    }

    return (
        <>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-4'>
                {products && products.slice(0, 3).map((product) => (
                    <Link to={`/product/${product.id}`} onClick={clickHandeler} key={product.id}>
                        <div className='py-2 px-2 my-2 border-orange-950/[5] border-4 rounded-lg max-w-sm transform transition duration-300 hover:scale-110'>
                            <div className=' rounded overflow-hidden'>
                                <img src={product.image} alt='image' className='w-full aspect-square rounded-md cursor-pointer' />
                            </div>
                            <div className='font2 text-white flex flex-col lg:flex-row max-w-sm lg:mx-2 my-4 gap-1'>
                                <div className=' gap-1 lg:w-2/3 '>
                                    <h1>{product.title}</h1>
                                    <scan>₹{product.price}</scan>
                                </div>
                                <div className='flex flex-col justify-center lg:w-1/3 gap-3'>
                                    <div className='flex justify-center items-center flex-col'>

                                        <h1 className='flex flex-row gap-2 justify-center items-center'>Eggless <img src={Veg} alt='Veg' /></h1>
                                    </div>
                                    <button className="bg-orange-600 tracking-widest hover:bg-orange-500  text-white font-semibold px-4 py-1 rounded-xl text-sm overflow-hidden justify-center flex  whitespace-nowrap  w-full "
                                        onClick={handleAddToCart}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default LikeProduct;