import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenfilesBarTap from "./OpenfilesBarTap";

function OpendBar() {
  const {opendFiles}=useSelector((state:RootState)=>state.fileTreeSlice)
  return (
    <div className="w-full h-[44]">
      <ul className="flex items-center transition h-[47]">
        {opendFiles &&
          opendFiles.map((file) => {
            return <OpenfilesBarTap file={file} key={file.id}/>
          })}
      </ul>
    </div>
  );
}

export default OpendBar