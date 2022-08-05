import React from "react";

function Editor({ modifyAndSetMdText, value }) {
  return (
    <textarea
      style={{
        width: "100%",
        height: "45vh",
        color: "#222831",
        outline: "none",
      }}
      className="p-4 bg-indigo-100"
      id="editor"
      onChange={(event) => {
        const text = event.target.value;
        modifyAndSetMdText(text);
      }}
      value={value}
    ></textarea>
  );
}

export default Editor;
