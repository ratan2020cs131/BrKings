import { useEffect, useState, React } from 'react'
import HeroImage from '../../Images/brauni-ai (1) 1.png';
import "./Home.scss";
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../Redux/Slices/itemSlice";
import { selectPagination, setCurrentPage } from '../../Redux/Slices/Pagination';




const Home = () => {

  const { currentPage, itemsPerPage } = useSelector(selectPagination);

  const [loading, setLoading] = useState(true);

  const product = useSelector(state => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(fetchProducts())
  }, [dispatch]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = product.products.slice(startIndex, endIndex);

  const onPageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <>
      <div className='bg-gray-950 w-full h-full'>
        <div className="lg:h-72 h-2/6 md:h-2/5 font flex flex-row  bg py-1">
          <div className="md:text-3xl flex flex-col justify-center py-2 ml-2 md:ml-9 md:px-4 text-sm px-3 w-[70%] ">
            <p>A place for</p>
            <div className="md:header-subcontent font3 text-3xl font-semibold md:text-7xl md:my-4 text-white my-1">Imperial Treats</div>
            <p>
              Indulge in the royal decadance of Brownie King's heavenly creation
            </p>
          </div>
          <div className="w-[30%] imgBox">
            <img src={HeroImage} alt="Imgae" className=' w-[100%] h-[100%] object-contain md:absolute md:top-[24px]' />
          </div>
        </div>
        <div className='lg:mx-8 mx-4 flex flex-col mt-10 gap-4'>
          <h1 className='font text-white text-3xl'>Our Exclusive Pics</h1>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center my-4'>
              {currentProducts.map((product) => (
                <div key={product.id}>
                  {/* <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-gray-600">{`$${product.price.toFixed(2)}`}</p> */}
                  <ProductCard name={product.title} price={product.id} image={product.image} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pagination font-semibold flex justify-center text-lg text-orange-600 font2 gap-3 py-4 mt-3">
          <button
            className='border-2 border-orange-950/[5] p-1 rounded-sm transform transition duration-300 hover:scale-110'
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className='border-2 border-orange-950/[5] p-1 px-2 rounded-sm'> {currentPage}</span>
          <button
            className='border-2 border-orange-950/[5] p-1 px-3 rounded-sm transform transition duration-300 hover:scale-110'
            onClick={() => onPageChange(currentPage + 1)}
            disabled={endIndex >= product.products.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Home