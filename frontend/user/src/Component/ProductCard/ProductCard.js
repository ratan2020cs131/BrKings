import React from "react";
import { NavLink } from "react-router-dom";
import Veg from "../../Images/VEG.png";
import Brownie from "../../Images/Rectangle 4273.png";

const ProductCard = ({ product,image }) => {


    return (
        <>
            <NavLink to={`/product/${product._id}`}>
                <div className='py-2 px-2 my-2 border-orange-950/[5] border-4 rounded-lg max-w-sm transform transition duration-300 hover:scale-110'>
                    <div className=' rounded overflow-hidden'>
                        <img src={image?.url} alt='image' className='w-full aspect-square rounded-md cursor-pointer'/>
                    </div>
                    <div className='font2 text-white flex flex-row justify-between max-w-sm lg:mx-2 my-4 gap-1'>
                        <div className=' gap-1 lg:w-2/3 '>
                            <h1 className=" font-extrabold">{product.title}</h1>
                            <scan>₹{product?.price}</scan>
                        </div>
                        <div className='flex flex-col justify-center lg:w-1/3 gap-3'>
                            <div className='flex justify-center items-center flex-col'>
                                <h1 className='flex flex-row gap-2 justify-center items-center'>Eggless <img src={Veg} alt='Veg' /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
};

export default ProductCard;
