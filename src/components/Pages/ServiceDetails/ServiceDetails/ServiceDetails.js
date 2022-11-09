import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "../../ReviewsSection/AddReview/AddReview/AddReview";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, title, price, description, _id } = service;
  console.log(service);
  return (
    <div className="grid grid-cols-12 container mx-auto">
      <section className="col-span-8 border-2 border-red p-5">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <br />
        <h1 className="text-3xl font-semibold text-white">
          Service Name : {title}
        </h1>
        <br />
        <p className="text-xl font-semibold text-white ">Price : ${price} </p>
        <br />
        <h1 className="text-2xl text-slate-300 font-bold">About {title} </h1>
        <p>{description}</p>
      </section>
      <section className="col-span-4 border-2 border-red">
        <div className="border-2 border-red-400">
          <AddReview></AddReview>
        </div>
        <div className="border-2 border-red-500">
          <h1>reviews</h1>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
