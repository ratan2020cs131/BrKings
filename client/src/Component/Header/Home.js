import { useEffect, useState, React } from 'react'
import HeroImage from '../../Images/brauni-ai (1) 1.png';
import "./Home.scss";
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/Slices/itemSlice';



const fetchProducts = () => {
  // Simulating API call to fetch products
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 39.99 },
        { id: 4, name: 'Product 4', price: 39.99 },
        { id: 5, name: 'Product 5', price: 39.99 },
        { id: 6, name: 'Product 6', price: 39.99 },
        // Add more products here
      ]);
    }, 1500); // Simulating a delay of 1.5 seconds
  });
};

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // const {products,loader} = useSelector((state) => state.item);
  // const dispatch = useDispatch();
  // console.log(products);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
    // dispatch(getItems);
    // setLoading(false);
  }, []);

  return (
    <>
      <div className='bg-gray-950 w-full h-full'>
        <div className="lg:h-80 h-2/6 md:h-2/5 font flex flex-row  bg py-1">
          <div className="lg:text-3xl flex flex-col justify-center py-2 ml-2 lg:mx-9 lg:px-4 lg:w-2/3 text-sm px-3 w-2/3 ">
            <p>A place for</p>
            <div className="lg:header-subcontent font3 text-3xl font-semibold lg:text-7xl lg:my-4 text-white my-1">Imperial Treats</div>
            <p>
              Indulge in the royal decadance of Brownie King's heavenly creation
            </p>
          </div>
          <div className="w-1/3 imgBox">
            <img src={HeroImage} alt="Imgae" className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='lg:mx-8 mx-4 flex flex-col mt-10 gap-4'>
          <h1 className='font text-white text-3xl'>Our Exclusive Pics</h1>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 my-3'>
              {products.map((product) => (
                <div key={product.id}>
                  {/* <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-gray-600">{`$${product.price.toFixed(2)}`}</p> */}
                  <ProductCard name={product.name} price={product.price} />
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