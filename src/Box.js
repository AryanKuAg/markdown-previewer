import React from "react";

function Box({ title, children }) {
  return (
    <div className="">
      <div className="h-10 bg-blue-500 flex justify-between">
        <p>{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Box;
