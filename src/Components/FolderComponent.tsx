import { Ifile } from "../interfaces";
import FolderIcon from "./Icon/FolderIcon";

function FolderComponent({fileTree}:{fileTree:Ifile}) {
  return (
    <div className="flex items-center space-x-1">
        <span>
          <FolderIcon />
        </span>
      <span>{fileTree.filename}</span>
      {
        fileTree.children && fileTree.children.map((folder, idx) => {
          return <FolderComponent fileTree={folder} key={idx}/>
        })
      }
    </div>
  )
}

export default FolderComponent;