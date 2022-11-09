import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "../../ReviewsSection/AddReview/AddReview/AddReview";
import Reviews from "../../ReviewsSection/Reviews/Reviews/Reviews";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, title, price, description, _id } = service;
  const { user } = useContext(AuthContext);
  //   console.log(service);

  //   fetching reviews of a particular service from db
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setRefresh(!refresh);
      });
  }, [_id, refresh]);
  return (
    <div className="grid grid-cols-12 container mx-auto">
      {/* Service details section */}
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

      {/* Reviews Section */}
      <section className="col-span-4 border-2 border-red p-5">
        <h1 className="text-center text-3xl font-semibold text-yellow-500">
          Reviews
        </h1>
        <div className="border-2 border-red-400">
          {reviews.map((review) => (
            <Reviews key={review._id} review={review}></Reviews>
          ))}
        </div>
        <div className=" border-2 border-red-500">
          {user?.uid ? (
            <AddReview service={service}></AddReview>
          ) : (
            <>
              <div>
                <div className="card  bg-base-100 shadow-xl image-full">
                  <div className="card-body">
                    <h2 className="card-title font-bold text-xl">
                      Please Log in to add a review
                    </h2>

                    <div className="card-actions justify-end">
                      <Link to="/login">
                        <button className="btn btn-primary">Log In</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
