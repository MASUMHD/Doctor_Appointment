import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";

const image_hosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_Key}`;

const AddServices = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImage(file);
    }
  };

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // Upload image to ImgBB if it exists
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await axios.post(image_hosting_api, formData);
        console.log("Image Upload Response:", response.data);

        // You can add the image URL to the form data
        const imageUrl = response.data.data.url;
        const finalData = { ...data, imageUrl };

        // Now you can send finalData to your backend
        console.log("Final Data to Send to Backend:", finalData);
        // await axiosPublic.post('/your-endpoint', finalData);

      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("No image file selected.");
    }
  };

  return (
    <div className="w-full lg:w-2/3 mx-auto p-3">
      <h1 className="text-3xl font-bold mb-8">Add Services</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-16">
        {/* Image Upload Section */}
        <div className="flex flex-col lg:flex-row space-y-4 gap-5">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-2 w-full cursor-pointer flex-1">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="hidden"
              {...register("image", { required: true })}
              onChange={handleImageChange}
            />
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : (
                <>
                  <FaCloudUploadAlt className="w-12 h-12 text-gray-400" />
                  <span className="text-gray-500 mt-2">
                    Upload Your Service Photo
                  </span>
                </>
              )}
            </label>
          </div>
          {errors.image && <p className="text-red-500">Image is required.</p>}

          {/* Start and End Time Fields */}
          <div className="flex-1 space-y-4">
            <div className="text-start space-y-2">
              <label
                className="text-base font-semibold ml-1"
                htmlFor="startTime"
              >
                Start Time:
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                className="border p-2 w-full rounded-lg"
                {...register("startTime", { required: true })}
              />
              {errors.startTime && (
                <p className="text-red-500">Start Time is required.</p>
              )}
            </div>
            <div className="text-start space-y-2">
              <label className="text-base font-semibold ml-1" htmlFor="endTime">
                End Time:
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                className="border p-2 w-full rounded-lg"
                {...register("endTime", { required: true })}
              />
              {errors.endTime && (
                <p className="text-red-500">End Time is required.</p>
              )}
            </div>
          </div>
        </div>

        {/* Title Field */}
        <div className="text-start space-y-2">
          <label className="text-base font-semibold ml-1" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border p-2 w-full rounded-lg"
            placeholder="Enter title"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500">Title is required.</p>}
        </div>

        {/* Start Date and End Date Fields */}
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="text-start space-y-2 w-full">
            <label className="text-base font-semibold ml-1" htmlFor="startDate">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="border p-2 w-full rounded-lg"
              {...register("startDate", { required: true })}
            />
            {errors.startDate && (
              <p className="text-red-500">Start Date is required.</p>
            )}
          </div>
          <div className="text-start space-y-2 w-full">
            <label className="text-base font-semibold ml-1" htmlFor="endDate">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="border p-2 w-full rounded-lg"
              {...register("endDate", { required: true })}
            />
            {errors.endDate && (
              <p className="text-red-500">End Date is required.</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <input
            type="submit"
            value="Submit"
            className="bg-[#F7A582] text-black font-bold hover:bg-[#07332F] hover:text-white p-2 rounded w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddServices;
