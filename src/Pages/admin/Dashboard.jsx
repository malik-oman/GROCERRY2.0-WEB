import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const Dashboard = () => {

  const data = [
    {
      title: "Total Orders", value: "1,248", icon: ShoppingCart,
    },
    {
      title: "Active Customers", value: "5,362", icon: Users,
    },
    {
      title: "Today Revenue", value: "72,430", icon: DollarSign, 
    },
    {
       title: "Products In Stock", value: "4,820", icon: Package,
    },
  ];

  return (
    <div className='space-y-6'>
    <div>
      <h1 className='text-2xl font-bold text-gray-900 mb-2'>Dashboard Overview</h1>
    </div>

    {/* simple card  */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
     {data.map((item,index)=>{
      const Icon = item.icon
      return(
        <div key={index} className='bg-white rounded-lg border border-gray-200 p-6'>
          <div className='flex items-center space-x-3'>
         <Icon size={24} className='text-gray-500'/>
         <div>
          <p className='text-sm text-gray-600'>{item.title}</p>
          <h3 className='text-2xl font-bold text-gray-900'>{item.value}</h3>
         </div>
          </div>
        </div>
      )
     })}
    </div>
    </div>
  )
}

export default Dashboard