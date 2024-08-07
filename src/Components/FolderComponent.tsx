import FolderIcon from "./Icon/FolderIcon";

function FolderComponent({folderName}:{folderName:string}) {
  return (
    <div className="flex items-center space-x-1">
        <span>
          <FolderIcon />
        </span>
        <span>{folderName}</span>
    </div>
  )
}

export default FolderComponent;