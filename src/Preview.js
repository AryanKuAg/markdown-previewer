import MarkdownPreview from "@uiw/react-markdown-preview";

function Preview({ mdText }) {
  return (
    <div id="preview">
      <MarkdownPreview source={mdText} />
    </div>
  );
}

export default Preview;
