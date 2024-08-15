
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
function FileSyntaxHighlighter({content}:{content:string}) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        background: "transparent",
        width: "100%",
        maxHeight: "calc(100vh - 36px)",
        fontSize: "1.5rem",
      }}
      showInlineLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
}

export default FileSyntaxHighlighter