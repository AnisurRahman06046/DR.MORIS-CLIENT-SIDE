import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const ReviewTable = ({ myreview }) => {
  const { serviceName, Review, name, _id } = myreview;

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this review?");
    if (confirm) {
      fetch(`https://server-green-five.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount) {
            Swal.fire("Review deleted successfully");
          }
        });
    }
  };
  const handleEditReview = (id) => {
    console.log(id);
  };
  return (
    <tr>
      <th>
        <label></label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">Customer Name : {name}</div>
          </div>
        </div>
      </td>
      <td>
        {Review}
        <br />
      </td>

      <th>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Action
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={`/editreview/${_id}`}>
                <button
                  onClick={() => handleEditReview(_id)}
                  className="btn mb-2 w-1/2 bg-yellow-700 btn-ghost"
                >
                  Edit Review
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleDelete(_id)}
                className="btn w-1/2 bg-yellow-700 btn-ghost"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </th>
    </tr>
  );
};

export default ReviewTable;
