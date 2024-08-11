import { useState } from "react";
import { Ifile } from "../interfaces";
import FileIcon from "./Icon/FileIcon";
import FolderIcon from "./Icon/FolderIcon";

function FileComponent({ fileTree:{filename,isFolder,children} }: { fileTree: Ifile }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => setIsOpen(prev => !prev)
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2" onClick={toggle}>
        {isFolder && isOpen ? <span className="rotate-180">^</span> : <span>&gt;</span>}
        <span>{isFolder ? <FolderIcon /> : <FileIcon />}</span>
        <span>{filename}</span>
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => {
          return <FileComponent key={idx} fileTree={file} />;
        })}
    </div>
  );
}

export default FileComponent;
