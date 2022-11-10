import React from "react";

const EmptyReview = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>No Reviews Yet
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Please add reviews
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmptyReview;
