import {  createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { products } from "../assets/assets";
import { blogs } from "../assets/assets";
import toast from "react-hot-toast";
 const currency = import.meta.env.VITE_CURRENCY

export const AppContext = createContext({})

const AppContextProvider = ({ children })=>{

  const navigate = useNavigate()

 const [user,setUser] = useState(null)

 const [loading,setLoading] = useState(false)

  const [admin,setAdmin] = useState(null)

 const [categoriesData, setCategoriesData] = useState([])

 
 const [productsData, setProductsData] = useState([])

 const [blogsData, setBlogsData] = useState([])

const [cart, setCart] = useState([])

const [favorite, setFavorite] = useState([])



 const fetchCategories = async () => {
   setCategoriesData(categories)
 };


  const fetchProducts = async () => {
   setProductsData(products)
 };

   const fetchBlogs = async () => {
   setBlogsData(blogs)
 };


 const addToCart = (product)=>{
  setCart((prev)=>{
    const newCart = structuredClone(prev)
    const existingProduct = newCart.find((item)=>item._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    }else {
      newCart.push({...product, quantity: 1});
    }
    toast.success('Product added to cart')
    return newCart;
  });
 };


 const removeFromCart = (id) =>{
  setCart((prev)=>{
    const newCart = structuredClone(prev)
    const existingProduct = newCart.find((item) => item._id === id)
    if (existingProduct.quantity === 1) {
       return newCart.filter((item) => item._id !== id)
    } else {
      existingProduct.quantity -=1
    }
    return newCart;
   
  })
 }


 const addToFavorite = (product) =>{
   setFavorite((prev)=>{
    const newFavs = structuredClone(prev)
    if (!newFavs.find((item)=>item._id === product._id)) {
      newFavs.push(product)
      toast.success('Product added to favorite')
    } else {
      toast.error('Product already added to favorite')
    }
    return newFavs;
   })
 }

 const removeFavorite = (id) => {
  setFavorite((prev)=> {
    const newFavs = structuredClone(prev)
    const removed = newFavs.filter((item)=>item._id !== id)
    toast.success('Product removed from favorite!')
    return removed
  })
 }

const getCartTotal = () => {
  const total = cart.reduce(
    (sum, item) => sum + (item.offerPrice || item.price || 0) * item.quantity,
    0
  );
  return total.toFixed(2); // 2 decimal points
};



 useEffect(()=>{
  fetchCategories();
  fetchProducts();
  fetchBlogs();
 },[]);


 
 const value = {navigate, user, setUser, categoriesData, productsData,currency, blogsData, addToCart,removeFromCart,cart,favorite,addToFavorite,removeFavorite,getCartTotal,admin,setAdmin,loading,setLoading}




  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider