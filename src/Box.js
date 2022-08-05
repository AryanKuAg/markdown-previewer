import React from "react";

function Box({ title, children }) {
  return (
    <div className="max-w-7xl rounded-sm border border-gray-500 border-solid my-5">
      <div className="h-10 flex justify-between  items-center text-white bg-indigo-500 px-2 font-bold">
        <p>{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Box;
