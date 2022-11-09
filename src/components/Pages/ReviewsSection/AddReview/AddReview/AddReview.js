import React from "react";
import { Link } from "react-router-dom";

const AddReview = () => {
  return (
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
        </div>

        <div className="flex flex-col w-full">
          <form>
            <input className="p-2 rounded-md" type="text" placeholder="Name" />
            <br />
            <input
              className="p-2 mt-3 mb-3 rounded-md"
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
            <br />
            <textarea
              className="p-4 rounded-md resize-none dark:text-gray-100 "
              data-gramm="false"
              wt-ignore-input="true"
              name="message"
              id=""
              rows="3"
              cols="38"
              placeholder="Review..."
            ></textarea>
            <button
              type="button"
              className="btn btn-wide rounded-md ml-8 bg-yellow-800 py-4 my-8"
            >
              Add Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
