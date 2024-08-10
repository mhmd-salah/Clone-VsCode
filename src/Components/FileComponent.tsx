import { Ifile } from "../interfaces";
import FileIcon from "./Icon/FileIcon";

function FileComponent({ fileTree }: { fileTree: Ifile }) {
  return (
    <div className="mb-2 ml-2">
      <div className="flex items-center">
        <span>&gt;</span>
        <span>
          <FileIcon />
        </span>
        <span>{fileTree.filename}</span>
      </div>
      {fileTree.children &&
        fileTree.children.map((file, idx) => {
          return <FileComponent key={idx} fileTree={file} />;
        })}
    </div>
  );
}

export default FileComponent;
