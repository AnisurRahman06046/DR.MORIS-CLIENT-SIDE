import React, { useEffect, useState } from "react";
import ServicesCard from "../Shared/ServicesCard/ServicesCard";
import Banner from "./HomePageComponents/Banner/Banner";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-5xl mt-10 mb-10 text-center text-white font-semibold">
        Services
      </h1>
      <section className="grid grid-cols-3 gap-2 container mx-auto">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
        <button className="btn btn-success btn-wide">See More</button>
      </section>
    </div>
  );
};

export default Home;
