import { useSelector } from "react-redux";
import FolderComponent from "./Components/FolderComponents";
import OpendBar from "./Components/OpendBar";
import { fileTree } from "./Data/FileTree";
import { RootState } from "./app/store";
import FileSyntaxHighlighter from "./Components/FileSyntaxHighlighter";


function App() {
  const {clickedFiles}= useSelector((state:RootState)=>state.fileTreeSlice)
  const {fileContent}=clickedFiles;
  return (
    <>
      {/* <FileComponent fileTree={fileTree} /> */}
      <div className="text-center p-2 bg-black border-b pl-3 border-white/20">
        <img src="/icons/vscode.png" width={20} height={20} />
      </div>
      <div className="flex bg-[111] h-[calc(100vh-36.8px)] ">
        <div className="w-64 p-5 border-r border-white/20 h-full ">
          <FolderComponent fileTree={fileTree} />
        </div>
        <div>
          <div className="flex flex-col w-[calc(100vw-256px)] justify-center border-b h-fit border-white/20">
            <OpendBar />
          </div>
          <FileSyntaxHighlighter content={fileContent as string} />
        </div>
      </div>
    </>
  );
}

export default App;
