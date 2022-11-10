import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../customhook/useTitle/useTitle";
import ReviewTable from "../ReviewTable/ReviewTable";

const MyReviews = () => {
  useTitle("My-Reviews");
  const { user } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
  }, [user?.email]);
  return (
    <div className="overflow-x-auto w-full  mt-5 mb-5">
      <table className="table  w-full">
        <thead>
          <tr>
            <th>
              <label>
                <ol>
                  <li></li>
                </ol>
              </label>
            </th>
            <th>Service Name</th>
            <th>Review</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myreviews.length > 0 ? (
            <>
              {myreviews.map((myreview) => (
                <ReviewTable
                  key={myreview._id}
                  myreview={myreview}
                ></ReviewTable>
              ))}
            </>
          ) : (
            <>
              <p className="text-5xl font-bold text-center">
                You have not added any review yet.
              </p>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
