import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../../Context/AppContext";
import { Upload, Image as ImageIcon } from "lucide-react";

const AddCategory = () => {
  const [formData, setFormData] = useState({ name: "", image: null });
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const { navigate, loading, setLoading } = useContext(AppContext);

  // Text Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // File Upload Handler
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setFormData({ ...formData, image: selectedFile });

    const previewURL = URL.createObjectURL(selectedFile);
    setPreview(previewURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.image) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Category added successfully!");
      navigate("/admin/categories");
    }, 1200);
  };

  return (
    <div className="py-10 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Add New Category
        </h2>

        {/* Image Preview */}
        {preview && (
          <div className="w-full flex justify-center">
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-xl shadow-md border"
            />
          </div>
        )}

        {/* Category Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter category name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition"
          />
        </div>

        {/* Image Upload Box */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Category Image
          </label>

          <input
            type="file"
            id="fileUpload"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />

          <label
            htmlFor="fileUpload"
            className="w-full h-40 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary transition p-4"
          >
            {preview ? (
              <>
                <ImageIcon className="w-8 h-8 text-primary" />
                <p className="text-gray-700 font-medium">Change Image</p>
              </>
            ) : (
              <>
                <Upload className="w-10 h-10 text-gray-400" />
                <p className="text-gray-500">Click to upload category image</p>
              </>
            )}
          </label>

          {/* File Name */}
          <p className="text-sm text-gray-600 mt-2">
            {file ? file.name : "No file selected"}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 rounded-lg transition shadow-md"
        >
          {loading ? "Uploading..." : "Add Category"}
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
