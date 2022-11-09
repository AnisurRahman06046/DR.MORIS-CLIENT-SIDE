import React, { useEffect, useState } from "react";
import ServicesCard from "../Shared/ServicesCard/ServicesCard";
import Banner from "./HomePageComponents/Banner/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-5xl mt-10 mb-10 text-center text-white font-semibold">
        Services
      </h1>
      <section className="grid grid-cols-3 gap-2 lg:container mx-auto sm:content-center">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
        <Link to="/services">
          <button className="btn btn-success lg:btn-wide lg:mx-8 lg:my-8 lg:ml-[500px] sm:mx-4 sm:my-4 sm:btn-wide sm:ml-[200px]">
            See More
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
