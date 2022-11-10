import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../customhook/useTitle/useTitle";
import EmptyReview from "../EmptyReview/EmptyReview";
import ReviewTable from "../ReviewTable/ReviewTable";

const MyReviews = () => {
  useTitle("My-Reviews");
  const { user, loading } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (loading) {
          return (
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
          );
        }
        setMyreviews(data);
      });
  }, [user?.email, loading]);
  return (
    <div>
      {myreviews.length > 0 ? (
        <>
          <div className="overflow-x-auto w-full p-40  ">
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
                {myreviews.map((myreview) => (
                  <ReviewTable
                    key={myreview._id}
                    myreview={myreview}
                  ></ReviewTable>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <EmptyReview></EmptyReview>
        </>
      )}
    </div>
  );
};

export default MyReviews;
