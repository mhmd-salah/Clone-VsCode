import { useState } from "react";
import { Ifile } from "../interfaces";
import FileIcon from "./Icon/FileIcon";
import FolderIcon from "./Icon/FolderIcon";
import FolderOpen from "./Icon/Folderopen";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setActiveTapId, setClicedFileAction, setOpendFileAction } from "../app/features/fileTree";

function FolderComponent({ fileTree }: { fileTree: Ifile }) {
  const {id, filename, isFolder, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { opendFiles } = useSelector((state: RootState) => state.fileTreeSlice);
  //Handlers
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    if (opendFiles.includes(fileTree)) {
      dispatch(setActiveTapId(id))
      dispatch(setClicedFileAction({ filename, fileContent: fileTree.content }));
      return;
    }
    dispatch(setOpendFileAction([...opendFiles, fileTree]));
    dispatch(setActiveTapId(id))
    dispatch(setClicedFileAction({ filename, fileContent: fileTree.content }));
  };
  return (
    <div className="ml-3">
      <div
        className="flex items-center mb-2 space-x-1 cursor-pointer"
        onClick={toggle}
      >
        {isFolder && isOpen ? (
          <span className="rotate-90 text-white/40">&gt;</span>
        ) : (
          <span className="text-white/40">&gt;</span>
        )}
        <span>
          {isFolder ? isOpen ? <FolderOpen /> : <FolderIcon /> : <FileIcon />}
        </span>
        {/* <span>{filename}</span> */}
        {!isFolder ? (
          <div onClick={onFileClicked}>
            <RenderFileIcon filename={filename} />
          </div>
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
