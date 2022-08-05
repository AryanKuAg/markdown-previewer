import MarkdownPreview from "@uiw/react-markdown-preview";

function Preview({ mdText }) {
  return (
    <div id="preview">
      <MarkdownPreview source={mdText} style={{ padding: "2rem" }} />
    </div>
  );
}

export default Preview;
