import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { navigate, categoriesData } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    offerPrice: "",
    smallDesc: "",
    longDesc: "",
    weight: "",
    category: "",
    images: [],
  });

  const [previews, setPreviews] = useState([null, null, null]);

  // Normal input handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // MULTIPLE IMAGES HANDLER (3 images)
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const updatedImages = [...formData.images];
    updatedImages[index] = file;

    const updatedPreviews = [...previews];
    updatedPreviews[index] = URL.createObjectURL(file);

    setFormData({ ...formData, images: updatedImages });
    setPreviews(updatedPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.category) {
      toast.error("Please select a category!");
      return;
    }

    console.log(formData);
    toast.success("Product added successfully!");
    navigate("/admin/products");
  };

  return (
    <div className="py-10 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Add New Product
        </h2>

        {/* PRODUCT NAME */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* PRICE + OFFER PRICE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 14.99"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Offer Price
            </label>
            <input
              type="number"
              name="offerPrice"
              placeholder="e.g. 9.99"
              value={formData.offerPrice}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition"
            />
          </div>
        </div>

        {/* SMALL DESC */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <input
            type="text"
            name="smallDesc"
            placeholder="Short product description"
            value={formData.smallDesc}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* LONG DESC */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Detailed Description
          </label>
          <textarea
            name="longDesc"
            placeholder="Write detailed description..."
            value={formData.longDesc}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition"
          ></textarea>
        </div>

        {/* WEIGHT + CATEGORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight
            </label>
            <input
              type="text"
              name="weight"
              placeholder="e.g. 500g, 1kg"
              value={formData.weight}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition"
            />
          </div>

          {/* CATEGORY DROPDOWN */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary transition"
            >
              <option value="">Select Category</option>
              {categoriesData?.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* IMAGES UPLOAD (3 slots) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Images (3 required)
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[0, 1, 2].map((index) => (
              <div key={index}>
                <input
                  type="file"
                  id={`image-${index}`}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, index)}
                />

                <label
                  htmlFor={`image-${index}`}
                  className="h-32 border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer hover:border-primary transition"
                >
                  {previews[index] ? (
                    <img
                      src={previews[index]}
                      alt=""
                      className="h-full w-full object-cover rounded-xl"
                    />
                  ) : (
                    <Upload className="w-8 h-8 text-gray-400" />
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-primary text-white py-3 rounded-lg hover:bg-primary/80 transition shadow-md text-lg font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
