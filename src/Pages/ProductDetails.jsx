import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { motion } from "motion/react";
import { Heart, ShoppingBasket } from "lucide-react";
import ProductCard from "../Components/ProductCard";

const ProductDetails = () => {
  const { productsData,currency, addToCart, addToFavorite } = useContext(AppContext);
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [mainImage, setMainImage] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);

useEffect(() => {
  if (!product) return; // safeguard for initial null
  const relatedProducts = productsData.filter(
    (item) => item.category === product.category && item._id !== product._id
  );
  setRelatedProducts(relatedProducts);
}, [product, productsData]);


  useEffect(() => {
    const product = productsData.find((item) => item._id === parseInt(id));
    setProduct(product);
    if (product) setMainImage(product.images[0]);
  }, [productsData, id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row items-start mt-6 gap-6 justify-center">
        {/* left side */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
          <div className="w-full max-w-2xl flex justify-center" id="thumbnail-container">
            <img
              src={mainImage}
              className="w-1/2 rounded-lg"
              alt={product.name}
            />
          </div>

          <div className="grid grid-cols-4 gap-4 w-full max-w-2xl">
            {product.images.map((img, index) => (
              <img
                src={img}
                key={index}
                onClick={() => setMainImage(img)}
                className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80"
                alt={`Thumb ${index + 1}`}
              />
            ))}
          </div>
        </div>


        {/* RIGHT SIDE  */}

        <div className="w-full md:w-1/2 flex flex-col justify-start">
             <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
             <div className="flex items-center space-x-4 mt-4">
              <h2 className="text-lg font-bold line-through text-gray-500">{currency}{product.price}</h2>
               <h2 className="text-lg font-bold  text-gray-800">{currency}{product.offerPrice}</h2>
             </div>
             <hr className="w-full mt-4 text-gray-200" />
             <p className="text-lg text-gray-600 font-medium my-2">{product.smallDesc}</p>

             <div className="flex flex-col md:flex-row gap-4 mt-6">

              <motion.button onClick={()=>addToCart(product)} whileHover={{scale: 1.1}} transition={{ease: 'easeInOut',duration: 0.5}} className="flex items-center gap-2 px-8 py-3 bg-secondary text-white font-medium cursor-pointer hover:bg-primary transition-all ease-in-out duration-300">
               <ShoppingBasket/>
               Add to cart
              </motion.button>

              <motion.button onClick={()=>addToFavorite(product)} whileHover={{scale: 1.1}} transition={{ease: 'easeInOut',duration: 0.5}} className="flex items-center gap-2 px-8 py-3 bg-secondary text-white font-medium cursor-pointer hover:bg-primary transition-all ease-in-out duration-300">
               <Heart/>
               Add to Whistle
              </motion.button>

             </div>
             <p className="text-secondary text-xl font-semibold my-4">{product.category}</p>
             <div className="border border-gray-200 rounded-lg mt-6 p-3">
               <h1 className="w-full bg-secondary text-white py-4 text-2xl font-semibold border-b-none">Description</h1>
               <p>{product.longDesc}</p>
             </div>
        </div>
      </div>

        {/* related products  */}

         <h1 className="mt-12 text-secondary font-extrabold text-3xl text-center">Related Products</h1>
         <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-4 '>
          {relatedProducts.map((product)=>(
            <ProductCard key={product._id} product={product}/>
          ))}
         </div>

    </div>
  );
};

export default ProductDetails;
