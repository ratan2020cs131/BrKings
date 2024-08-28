import { useEffect, React, useState } from "react";
import HeroImage from "../../Images/brauni-ai (1) 1.png";
import "./Home.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Slices/itemSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../common/Loader/Loading";
import PriceSlider from "./slider";

const Home = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handlePriceChange = (range) => {
    const [min, max] = range;
    const filtered = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    dispatch(getProducts());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className="bg-gray-950 w-full h-full">
        <div className="lg:h-72 h-2/6 md:h-2/5 font flex flex-row  bg py-1">
          <div className="md:text-3xl flex flex-col justify-center py-2 ml-2 md:ml-9 md:px-4 text-sm px-3 w-[70%] ">
            <p>A place for</p>
            <div className="md:header-subcontent font3 text-3xl font-semibold md:text-7xl md:my-4 text-white my-1">
              Imperial Treats
            </div>
            <p>
              Indulge in the royal decadance of Brownie King's heavenly creation
            </p>
          </div>
          <div className="w-[30%] imgBox">
            <img
              src={HeroImage}
              alt="Imgae"
              className=" w-[100%] h-[100%] object-contain md:absolute md:top-[24px]"
            />
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="lg:mx-8 mx-4 flex flex-col mt-10 gap-4">
            <h1 className="font text-white text-3xl">Our Exclusive Pics</h1>
            <h1>Product List</h1>
            <PriceSlider min={0} max={1000} onPriceChange={handlePriceChange} />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-4">
              {products &&
                products.slice(0, 6).map((product) => (
                  <div key={product._id}>
                    <ProductCard product={product} image={product.images[0]} />
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className="pagination font-semibold flex justify-center text-lg text-orange-600 font2 gap-3 py-4 mt-3">
          <button
            className="border-2 border-orange-950/[5] p-1 rounded-sm transform transition duration-300 hover:scale-110"
            onClick={() => navigate("/brownies")}
          >
            Load more
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
