import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { CircleX, Pencil } from "lucide-react";

const AllProduct = () => {
  const { productsData } = useContext(AppContext);

  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        
        {/* Header - Hidden on small screens */}
        <div className="hidden md:grid grid-cols-4 text-gray-600 font-semibold pb-3">
          <div>Product</div>
          <div>Name</div>
          <div>Price</div>
          <div className="text-center">Actions</div>
        </div>

        <hr className="my-4 border-gray-300 hidden md:block" />

        {/* Products List */}
        <ul className="space-y-4">
          {productsData.map((item) => (
            <li
              key={item._id}
              className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200"
            >
              <div className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center">
                
                {/* Product Image */}
                <div className="flex items-center justify-start md:justify-start">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover shadow-sm border"
                  />
                </div>

                {/* Product Name */}
                <p className="text-lg font-semibold text-gray-900">
                  {item.name}
                </p>

                {/* Product Price */}
                <p className="text-xl font-bold text-green-600">
                  Rs {item.price}
                </p>

                {/* Actions */}
                <div className="flex items-center md:justify-center gap-5">
                  
                  {/* Edit Button */}
                  <button
                    onClick={() => console.log("edit", item._id)}
                    className="group text-blue-500 hover:text-white border border-blue-400 hover:bg-blue-500 transition-all duration-200 px-3 py-2 rounded-lg"
                  >
                    <Pencil className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => console.log("delete", item._id)}
                    className="group text-red-500 hover:text-white border border-red-400 hover:bg-red-500 transition-all duration-200 px-3 py-2 rounded-lg"
                  >
                    <CircleX className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllProduct;
