import FolderComponent from "./Components/FolderComponents";
import OpendBar from "./Components/OpendBar";
import { fileTree } from "./Data/FileTree";


function App() {
  return (
    <>
      {/* <FileComponent fileTree={fileTree} /> */}
      <div className="flex  ">
        <div className="w-64 m-5">
          <FolderComponent fileTree={fileTree} />
        </div>
        <div className="p-4">
          <OpendBar />
        </div>
      </div>
    </>
  );
}

export default App;
