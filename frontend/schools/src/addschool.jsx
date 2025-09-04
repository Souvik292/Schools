import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    // for (let key in data) {
    //   formData.append(key, data[key]);
    // }
      for (let key in data) {
      if (key !== "image") formData.append(key, data[key]);
    }
    formData.append("image", data.image[0]);
    await axios.post("http://localhost:5000/api/addSchool", formData);
    alert("School added successfully!");
  };

  return (
    <>
    <a href="/" className="bg-white text-xl">home</a>

    <section className=" h-screen w-screen bg-blue-300 flex items-center ">
      
    <div className="  h-[80%] p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name", { required: true })} placeholder="School Name" className="border p-2 w-full"/>
        {errors.name && <p className="text-red-500">Name is required</p>}

        <input {...register("address", { required: true })} placeholder="Address" className="border p-2 w-full"/>
        <input {...register("city", { required: true })} placeholder="City" className="border p-2 w-full"/>
        <input {...register("state", { required: true })} placeholder="State" className="border p-2 w-full"/>
        <input type="number" {...register("contact", { required: true })} placeholder="Contact Number" className="border p-2 w-full"/>
        <input type="email" {...register("email_id", { required: true })} placeholder="Email" className="border p-2 w-full"/>
        
        <input type="file" {...register("image", { required: true })} className="border p-2 w-full"/>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add School</button>
      </form>
    </div>
    </section>
        </>
  );
}
