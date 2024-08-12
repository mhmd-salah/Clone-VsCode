import { useState } from "react";
import { Ifile } from "../interfaces";
import FileIcon from "./Icon/FileIcon";
import FolderIcon from "./Icon/FolderIcon";
import FolderOpen from "./Icon/Folderopen";
import RenderFileIcon from "./RenderFileIcon";

function FolderComponent({
  fileTree: { filename, isFolder, children },
}: {
  fileTree: Ifile;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="ml-3">
      <div className="flex items-center mb-2 space-x-1 cursor-pointer" onClick={toggle}>
        {isFolder && isOpen ? (
          <span className="rotate-180">^</span>
        ) : (
          <span>&gt;</span>
        )}
        <span>
          {isFolder ? isOpen ? <FolderOpen /> : <FolderIcon /> : <FileIcon />}
        </span>
        {/* <span>{filename}</span> */}
        {!isFolder ? (
          <RenderFileIcon filename={filename} />
        ) : (
          <span>{filename}</span>
        )}
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => {
          return <FolderComponent key={idx} fileTree={file} />;
        })}
    </div>
  );
}

export default FolderComponent;
