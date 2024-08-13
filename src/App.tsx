import FolderComponent from "./Components/FolderComponents";
import OpendBar from "./Components/OpendBar";
import { fileTree } from "./Data/FileTree";


function App() {
  return (
    <>
      {/* <FileComponent fileTree={fileTree} /> */}
      <div className="w-screen text-center p-2 bg-black border-b pl-3 border-white/20">
        <img src="/icons/vscode.png" width={20} height={20} />
      </div>
      <div className="flex bg-[111] ">
        <div className="w-64 p-5 border-r border-white/20 h-screen ">
          <FolderComponent fileTree={fileTree} />
        </div>
        <div 
        className="flex justify-center border-b h-fit  w-screen border-white/20 bg-[#222]">
          <OpendBar />
        </div>
      </div>
    </>
  );
}

export default App;
