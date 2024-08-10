import FileComponent from "./Components/FileComponent";
import { fileTree } from "./Data/FileTree";

function App() {
  return (
    <>
      <div>
        {/* <FileComponent fileName="index.ts" /> */}
        {/* {
          fileTree.children && fileTree.children.map((file, idx) => {
            if (!file.children) {
              return <FileComponent fileName={file.filename} key={idx} />;
            } else {
              file.children?.map((childFile, idx) => {
                return <FileComponent fileName={childFile.filename} key={idx} />;
              })
            }
          })
        } */}
      </div>
      <div className="flex flex-col">
        <FileComponent fileTree={fileTree} />
      </div>
    </>
  );
}

export default App
