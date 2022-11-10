import React, { useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../../customhook/useTitle/useTitle";

const AddServices = () => {
  useTitle("Add-Services");

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;

    const price = form.price.value;
    const img = form.img.value;
    const description = form.description.value;
    const service = {
      title: title,
      img: img,
      price: price,
      description: description,
    };
    console.log(service);
    fetch("https://server-green-five.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Service added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="p-6 my-10 dark:bg-gray-800 dark:text-gray-50">
      <form
        onSubmit={handleAddService}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Service Name</label>
              <input
                type="text"
                name="title"
                placeholder="Service Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Image Uri</label>
              <input
                name="img"
                type="text"
                placeholder="Image Uri"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Price</label>
              <input
                name="price"
                type="number"
                placeholder="$ Price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 "
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 "
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <button className="btn btn-ghost btn-wide bg-orange-500">
              Add a Service
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddServices;
