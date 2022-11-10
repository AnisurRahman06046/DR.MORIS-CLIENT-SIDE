import React from "react";

const ReviewTable = ({ myreview }) => {
  const { serviceName, Review, name } = myreview;
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ReviewTable;
