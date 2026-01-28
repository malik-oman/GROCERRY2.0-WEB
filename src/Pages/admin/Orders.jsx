import React, { useContext } from "react";
import { myOrders } from "../../assets/assets";
import { AppContext } from "../../Context/AppContext";

const Orders = () => {

  const {currency} = useContext(AppContext)
 
  return (

    <div className="py-12">
      <h1 className="text-3xl font-bold">All Orders</h1>
      <div className="border border-gray-400 max-w-5xl mx-auto p-3">
        <div className="grid grid-cols-4 font-semibold text-gray-700">
          <div>Date</div>
          <div>Total Amount</div>

          <div>Payment Method</div>
          <div>Status</div>
        </div>
        <hr className="w-full my-4 text-gray-200" />
        <ul>
          {myOrders.map((item) => (
            <div key={item._id}>
              <div className="grid grid-cols-4 items-center mb-4">
                <div>
                   
                  <p>{item.date}</p>
                </div>
                <p>
                  {currency}
                  {item.totalAmount}
                </p>
                   <p>
                  {currency}
                  {item.paymentMethod}
                </p>
                <select name="status" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-blue-500 block w-full p-2.5" >
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>

              
              </div>
              <hr className="w-full text-gray-300" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
