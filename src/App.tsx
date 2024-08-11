import FolderComponent from "./Components/FolderComponents";
import { fileTree } from "./Data/FileTree";


function App() {
  return (
    <>
      <div className="flex flex-col m-3">
        {/* <FileComponent fileTree={fileTree} /> */}
        <FolderComponent fileTree={fileTree}/>
      </div>
    </>
  );
}

export default App;
