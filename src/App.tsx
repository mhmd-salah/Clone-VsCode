import { useSelector } from "react-redux";
import FolderComponent from "./Components/FolderComponents";
import OpendBar from "./Components/OpendBar";
import { fileTree } from "./Data/FileTree";
import { RootState } from "./app/store";


function App() {
  const {clickedFiles}= useSelector((state:RootState)=>state.fileTreeSlice)
  console.log(clickedFiles);
  const {fileContent}=clickedFiles;
  return (
    <>
      {/* <FileComponent fileTree={fileTree} /> */}
      <div className="w-screen text-center p-2 bg-black border-b pl-3 border-white/20">
        <img src="/icons/vscode.png" width={20} height={20} />
      </div>
      <div className="flex bg-[111] h-[calc(100vh-36.8px)] ">
        <div className="w-64 p-5 border-r border-white/20 h-full ">
          <FolderComponent fileTree={fileTree} />
        </div>
        <div>
          <div className="flex flex-col justify-center border-b h-fit w-full border-white/20 bg-[#222]">
            <OpendBar />
          </div>
          {fileContent}
        </div>
      </div>
    </>
  );
}

export default App;
