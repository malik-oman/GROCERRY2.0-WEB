import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ProductDetails from './Pages/ProductDetails'
import About from './Pages/About'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Cart from './Pages/Cart'
import WishList from './Pages/WishList'
import CheckOut from './Pages/CheckOut'
import AddAddress from './Pages/AddAddress'
import MyOrder from './Pages/MyOrder'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'
import { AppContext } from './Context/AppContext'
import AdminLayout from './Pages/admin/AdminLayout'
import AdminLogin from './Pages/admin/AdminLogin'
import Dashboard from './Pages/admin/Dashboard'
import AddCategory from './Pages/admin/AddCategory'
import AddProduct from './Pages/admin/AddProduct'
import AllCategory from './Pages/admin/AllCategory'
import AllProduct from './Pages/admin/AllProduct'
import Orders from './Pages/admin/Orders'

const App = () => {

 const adminPath = useLocation().pathname.includes('admin')
 const {admin} = useContext(AppContext)

  return (
    <>
      <Toaster/>
    <div className='w-full mx-auto px-4 sm:px-6 lg:px-24'>

    {!adminPath &&  <Navbar/>}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/add-address" element={<AddAddress/>} />
        <Route path="/my-orders" element={<MyOrder/>} />
        
 
             {/* Admin Routes   */}

       <Route path="/admin" element={admin ? <AdminLayout/> : <AdminLogin/>}>

       <Route index element={admin ? <Dashboard/> : <AdminLogin/>} />

       <Route path='add-product' element={admin ? <AddProduct/> : <AdminLogin/>} />

       
       <Route path='add-category' element={admin ? <AddCategory/> : <AdminLogin/>} />

       
       <Route path='categories' element={admin ? <AllCategory/> : <AdminLogin/>} />

       
       <Route path='products' element={admin ? <AllProduct/> : <AdminLogin/>} />

       
       <Route path='add-orders' element={admin ? <Orders/> : <AdminLogin/>} />

      </Route>      

      </Routes>
            {!adminPath &&  <Footer/>}
    </div>

    </>
  )
}

export default App