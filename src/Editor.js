import React from "react";

function Editor({ modifyAndSetMdText, value }) {
  return (
    <textarea
      style={{ width: "98vw", height: "200px" }}
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
