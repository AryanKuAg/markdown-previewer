import MarkdownPreview from "@uiw/react-markdown-preview";

const source = `
## Redux and React-Redux

### Important       \` something something \`

- **useStore:** Give direct access to store.
- **useSelector:** Allows us to automatically select a part of our state managed by the store. (to read)
- **useDispatch:** It gives a dispatch function which will dispatch an action against redux store. (to write)
- **The object that we return in the reducer will not be merge with the existing state. They will overwrite the existing state. NEVER CHANGE THE EXISTING STATE. ALWAYS OVERWRITE IT BY RETURNING A BRAND NEW STATE.**

${`Terminal`}


- **useSelector takes a function that tells which piece of data we wanna extract from our store.**

`;

function Demo() {
  return <MarkdownPreview source={source} />;
}

export default Demo;
