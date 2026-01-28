import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';

const AddAddress = () => {
 
 const {navigate} = useContext(AppContext)

 const [formData, setFormData] = useState({
   name: "",
   email: "",
   city: "",
   country: "",
   zipCode: "",
   state: "",
 })

 const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
 };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Address added successfully")
    navigate('/checkout')
  }


  return (
    <div  className='py-12 bg-[#0B482F]' style={{backgroundImage: `url(${assets.footer_img})`}}>
          
      <div>
        <form onSubmit={submitHandler} className='max-w-xl w-full mx-auto text-white p-4 border border-white rounded'>

          <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Your Name' required  name='name' value={formData.name} onChange={handleChange} className='w-full outline-none border border-white py-3 rounded p-2' />
          </div>

              <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Your Email' required  name='email' value={formData.email} onChange={handleChange} className='w-full outline-none border border-white py-3 rounded p-2' />
          </div>


             <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter Your City' required  name='city' value={formData.city} onChange={handleChange} className='w-full outline-none border border-white py-3 rounded p-2' />
          </div>

             <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="">Country</label>
            <input type="text" placeholder='Enter Your Country' required  name='country' value={formData.country} onChange={handleChange} className='w-full outline-none border border-white py-3 rounded p-2' />
          </div>

             <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="">Zip Code</label>
            <input type="number" placeholder='Enter Your ZipCode' required  name='zipCode' value={formData.zipCode} onChange={handleChange} className='w-full outline-none border border-white py-3 rounded p-2' />
          </div>

             <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="">State</label>
            <input type="text" placeholder='Enter Your State' required  name='state' value={formData.state} onChange={handleChange} className='w-full outline-none border border-white py-3 rounded p-2' />
          </div>

          <button className='w-full bg-primary text-white cursor-pointer py-3'>Add Address</button>

        </form>
      </div>

    </div>
  )
}

export default AddAddress