import { useEffect, useState, React } from 'react'
import HeroImage from '../../Images/brauni-ai (1) 1.png';
import "./Home.scss";
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';




const Home = () => {

  const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  const products = useSelector(state => state.item);


  useEffect(() => {
    setLoading(false);

  }, []);

  return (
    <>
      <div className='bg-gray-950 w-full h-full'>
        <div className="lg:h-72 h-2/6 md:h-2/5 font flex flex-row  bg py-1">
          <div className="lg:text-3xl flex flex-col justify-center py-2 ml-2 lg:mx-9 lg:px-4 lg:w-2/3 text-sm px-3 w-2/3 ">
            <p>A place for</p>
            <div className="lg:header-subcontent font3 text-3xl font-semibold lg:text-7xl lg:my-4 text-white my-1">Imperial Treats</div>
            <p>
              Indulge in the royal decadance of Brownie King's heavenly creation
            </p>
          </div>
          <div className="w-1/3 imgBox">
            <img src={HeroImage} alt="Imgae" className='w-full h-full object-contain' />
          </div>
        </div>
        <div className='lg:mx-8 mx-4 flex flex-col mt-10 gap-4'>
          <h1 className='font text-white text-3xl'>Our Exclusive Pics</h1>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center my-4'>
              {products.map((product) => (
                <div key={product.id}>
                  {/* <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-gray-600">{`$${product.price.toFixed(2)}`}</p> */}
                  <ProductCard name={product.title} price={product.id} image={product.image} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home