import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { CircleX } from "lucide-react";

const AllCategory = () => {
  const { categoriesData } = useContext(AppContext);

  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">All Categories</h1>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        {/* Header */}
        <div className="grid grid-cols-3 text-gray-600 font-semibold pb-3">
          <div>Image</div>
          <div>Name</div>
          <div className="text-center">Actions</div>
        </div>
        <hr className="my-4 border-gray-300" />

        {/* List */}
        <ul className="space-y-4">
          {categoriesData.map((item) => (
            <li
              key={item._id}
              className="grid grid-cols-3 items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              {/* Image */}
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover shadow-sm border border-gray-200"
                />
              </div>

              {/* Name */}
              <p className="text-lg font-medium text-gray-800">{item.name}</p>

              {/* Actions */}
              <div className="flex items-center justify-center gap-5">
                <button
                  onClick={() => console.log("delete", item._id)}
                  className="group text-red-500 hover:text-white border border-red-400 hover:bg-red-500 transition-all duration-200 px-3 py-2 rounded-lg"
                >
                  <CircleX className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategory;
