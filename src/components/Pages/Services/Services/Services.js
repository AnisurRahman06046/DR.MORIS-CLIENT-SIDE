// import React, { useEffect, useState } from "react";
import ServicesCard from "../../Shared/ServicesCard/ServicesCard";

import { useLoaderData } from "react-router-dom";
const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h1 className="text-white text-5xl text-center font-semibold mt-10">
        All Services
      </h1>
      <div className="grid grid-cols-3 gap-10 container mx-auto mt-20 mb-5">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
