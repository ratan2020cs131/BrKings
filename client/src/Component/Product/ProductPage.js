import React, { useState, useEffect } from 'react';
import './Product.css';
import Experience from '../../Images/Rectangle 4291.png';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductByIdAsync, selectProductById, selectProductSatus } from "../../Redux/Slices/itemSlice";
import LikeProduct from '../ProductCard/LikeProduct';



const ProductPage = () => {
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  let params = useParams();


  const product = useSelector(selectProductById);
  const status = useSelector(selectProductSatus);

  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
  }, [dispatch, params.id]);




  const [image, setImage] = useState({
    img1: "https://i.huffpost.com/gen/997773/images/o-BEAUTIFUL-FOOD-facebook.jpg",
    img2: "https://i.pinimg.com/originals/28/82/de/2882de7c3dd6b7c8e7fc2869990155b0.jpg",
    img3: "https://www.mecooks.com/wp-content/uploads/2018/01/MG_8590-768x1152.jpg",
    img4: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Chocolate-Layer-Cake_exps49124_THCA2916394C11_12_6bC_RMS-1.jpg"
  })

  const [activeImage, setactiveImage] = useState()
  useEffect(() => {
    if (product) {
      setactiveImage(product.image);
    }
  })


  return (
    <>
      {/* {status === "loading" ? <Product /> : null} */}
      {product && (
        <div className='flex flex-col justify-between bg-gray-950 lg:gap-8'>
          {console.log(product)}
          <section>
            <div className='flex flex-col gap-2 justify-between lg:flex-row mt-3 mx-4 lg:mx-8'>
              <div className='flex flex-col gap-6 lg:w-1/3 lg:h-2/4 lg:mx-2 lg:px-2'>
                <img src={activeImage} alt='activeImage' className='w-full h-full  rounded-xl aspect-square' />
                <div className='flex flex-row justify-start gap-2 h-24'>
                  <img src={image.img2} alt='image' onClick={() => setactiveImage(image.img2)} className='w-24 h-24 rounded-md cursor-pointer' />
                  <img src={image.img3} alt='image' onClick={() => setactiveImage(image.img3)} className='w-24 h-24 rounded-md cursor-pointer' />
                  <img src={image.img4} alt='image' onClick={() => setactiveImage(image.img4)} className='w-24 h-24 rounded-md cursor-pointer' />
                </div>
              </div>
              <div className='flex flex-col mt-3 lg:px-6 gap-42 lg:w-2/3 lg:h-full lg:mx-5  mx-3'>
                <div className='flex flex-col gap-2 lg:mr-16'>
                  <h1 className='text-2xl lg:text-3xl font-semibold text-white font'>{product.title}</h1>
                  <p className='text-semibold text-xl lg:text-2xl my-3 text-white font'>₹{product.price}<spam className='block text-sm'>Tax Included</spam></p>
                  <p className='text-semibold text-white font text-sx lg:text-lg font'>Double Chocolate Delight With A Taste of Walnut Crunch is a recipe for double chocolate cookies with lots of walnuts.</p>
                </div>
                <div className='flex flex-col gap-2 max-w-screen-md mt-4'>
                  <span className='font my-2 text-white'>Size:</span>
                  <div className='grid grid-cols-2 justify-items-streach px-3 lg:max-w-lg gap-4 h-48'>
                    <button className={`bg-transparent 
                font-semibold py-2 
                lg:px-4 border 
                leading-6 shadow-sm 
                hover:border-transparent transform transition duration-300 hover:scale-110
                hover:bg-orange-600 
                text-xl lg:text-2xl  
                hover:text-black 
                rounded pieces ${selectedButton === 'button1' ? 'selected' : ''}`}
                      onClick={() => handleButtonClick('button1')}>
                      4 Brownies
                    </button>
                    <button className={`bg-transparent 
                font-semibold py-2 
                lg:px-4 border 
                leading-6 shadow-sm 
                hover:border-transparent transform transition duration-300 hover:scale-110
                hover:bg-orange-600 
                text-xl lg:text-2xl  
                hover:text-black 
                rounded pieces ${selectedButton === 'button2' ? 'selected' : ''} `}
                      onClick={() => handleButtonClick('button2')}>
                      8 Brownies
                    </button>
                    <button className={`bg-transparent 
                font-semibold py-2 
                lg:px-4 border 
                leading-6 shadow-sm 
                hover:border-transparent transform transition duration-300 hover:scale-110
                hover:bg-orange-600 
                text-xl lg:text-2xl  
                hover:text-black 
                rounded pieces ${selectedButton === 'button3' ? 'selected' : ''} `}
                      onClick={() => handleButtonClick('button3')}>
                      16 Brownies
                    </button>
                  </div>
                  <button className='mt-3 rounded-md bg-amber-600 px-2 py-1.5 lg:mx-6 text-xl font-semibold leading-10 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-1/2
              transform transition duration-300 hover:scale-110'>
                    Add to Cart
                  </button>
                  <p className='font text-white lg:text-2xl lg:mt-6 my-3 lg:px-4'>{product.description}</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='flex border border-orange-500 my-4 mx-4 lg:mx-16 rounded-md flex-col lg:flex-row mt-4 '>
              <div className='rounded overflow-hidden max-w-sm'>
                <img src={Experience} alt='Image' className='w-full' />
              </div>
              <div className='bg-orange-500'>
                <div className='py-2 px-3'>
                  <h2 className='font font-bold text-3xl  text-black lg:text-5xl my-2'>Experience The Taste & Texture Of World Class Brownies</h2>
                  <p className='font  text-2xl lg:text-3xl text-black'>
                    Indulge in the pure bliss of our world-class brownies.
                    Each bite is a symphony of rich, decadent chocolate that melts on your tongue,
                    enveloping your senses in pure indulgence.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='w-full h-36 flex justify-center items-center quote my-3 lg: mt-8'>
              <div className='bg-black px-2 mx-4 h-18'>
                <h1 className='text-white font lg:text-4xl px-2 py-2'>There is nothing better than a friend unless it is a friend with chocolate.</h1>
              </div>
            </div>
          </section>
        </div>
      )}
      <div className='h-full w-full bg-gray-950'>
      <div className='mx-8 flex flex-col  gap-4 '>
        <h1 className='font text-white mt-8 text-3xl'>You may also like</h1>
        <div className='mb-4'>
        <LikeProduct />
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductPage