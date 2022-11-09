import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero  lg:h-[400px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/8gn2z08/Bg.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-xl font-semibold text-white">
              Diseased, crooked or missing teeth or a misshapen jaw can
              interfere with your speech; make chewing your food properly
              difficult and painful; and lead to expensive corrective
              procedures. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
