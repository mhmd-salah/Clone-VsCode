import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function OpendBar() {
  const {opendFiles}=useSelector((state:RootState)=>state.fileTreeSlice)
  return (
    <div className="w-full">
      <ul className="flex items-center ">
        {opendFiles &&
          opendFiles.map((file, idx) => {
            return <li
              key={idx}
              className="p-2 px-4 hover:bg-slate-50/5 transition "
            >{file.filename}</li>;
          })}
      </ul>
    </div>
  );
}

export default OpendBar