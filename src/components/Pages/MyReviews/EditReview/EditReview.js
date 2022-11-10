import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
const EditReview = () => {
  //   const { user } = useContext(AuthContext);
  const storedReview = useLoaderData();
  const [review, setReview] = useState(storedReview);

  console.log(storedReview);

  const handleEditReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const updated = {
      name: name,
      email: email,
      Review: message,
    };
    console.log(updated);

    fetch(`http://localhost:5000/updatereview/${storedReview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("updated successfully");
          form.reset();
        }
        console.log(data);
      });
  };
  return (
    <div>
      <div className="flex mt-5 mx-auto container flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">Update Your Review</span>
          </div>

          <div className="flex flex-col w-full">
            <form onSubmit={handleEditReview}>
              <input
                className="p-2 rounded-md"
                name="name"
                type="text"
                placeholder="Name"
                defaultValue={storedReview.name}
              />
              <br />
              <input
                className="p-2 mt-3 mb-3 rounded-md"
                type="email"
                name="email"
                id=""
                placeholder="Email"
                defaultValue={storedReview.email}
              />
              <br />
              <textarea
                className="p-4 rounded-md resize-none dark:text-gray-100 "
                data-gramm="false"
                wt-ignore-input="true"
                name="message"
                defaultValue={storedReview.Review}
                id=""
                rows="3"
                cols="38"
                placeholder="Review..."
              ></textarea>
              <button className="btn btn-wide rounded-md ml-8 bg-yellow-800 py-4 my-8">
                Update Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
