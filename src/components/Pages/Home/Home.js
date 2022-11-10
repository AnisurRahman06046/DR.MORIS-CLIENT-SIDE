import React, { useEffect, useState } from "react";
import ServicesCard from "../Shared/ServicesCard/ServicesCard";
import Banner from "./HomePageComponents/Banner/Banner";
import { Link } from "react-router-dom";
import useTitle from "../../customhook/useTitle/useTitle";
import DiscountBanner from "./HomePageComponents/DiscountBanner/DiscountBanner";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://server-green-five.vercel.app/home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-5xl mt-10 mb-10 text-center text-white font-semibold">
        Services
      </h1>
      <section className="grid lg:grid-cols-3   sm:grid-cols-1 sm:mx-12 gap-2 lg:container mx-auto sm:content-center">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
        <Link to="/services">
          <button className="btn btn-success lg:btn-wide lg:mx-8 lg:my-8 lg:ml-[500px] sm:mx-4 sm:my-4 sm:btn-wide sm:ml-[200px]">
            See More
          </button>
        </Link>
      </section>
      <section>
        <DiscountBanner></DiscountBanner>
      </section>
    </div>
  );
};

export default Home;
