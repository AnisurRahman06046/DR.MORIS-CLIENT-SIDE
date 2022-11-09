import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, title, price, description, _id } = service;
  console.log(service);
  return (
    <div className="flex justify-between container mx-auto my-10">
      <section className="w-[800px] border-2 flex-2 border-red-500">
        <img src={img} alt="" />
        <h1>details section</h1>
      </section>
      <section className=" w-[500px]">
        <h1>review section</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          doloremque, porro, cupiditate asperiores sed fuga reprehenderit ad
          odio earum, ratione suscipit obcaecati accusamus. Veritatis excepturi
          ex dignissimos molestias, rerum fugiat laborum minus qui distinctio
          exercitationem quidem expedita quibusdam commodi! Eum adipisci animi
          accusamus dolorum dolore nisi enim ducimus illum numquam aspernatur,
          qui excepturi in, a, voluptas praesentium assumenda fuga quidem. Odit
          quasi praesentium dolorum explicabo suscipit ipsam beatae itaque
          quaerat molestias possimus expedita, porro, quam quibusdam soluta,
          perspiciatis modi facere eaque. Rem obcaecati repudiandae laboriosam
          expedita dolorum illo omnis saepe, laudantium ipsam. Sint officia
          nobis similique, quisquam reprehenderit pariatur nesciunt!
        </p>
      </section>
    </div>
  );
};

export default ServiceDetails;
