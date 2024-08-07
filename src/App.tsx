import FileComponent from "./Components/FileComponent";
import FolderComponent from "./Components/FolderComponent";
function App() {

  return (
    <>
      <div>
        <FileComponent fileName="index.ts"/>
        <FileComponent fileName="index.html"/>
        <FileComponent fileName="main.js" />
        <FolderComponent folderName="node-modules"/>
      </div>
    </>
  );
}

export default App
