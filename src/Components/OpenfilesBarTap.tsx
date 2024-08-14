import { useDispatch, useSelector } from "react-redux";
import { Ifile } from "../interfaces";
import CloseIcon from "./Icon/CloseIcon";
import { setActiveTapId, setClicedFileAction } from "../app/features/fileTree";
import { RootState } from "../app/store";

function OpenfilesBarTap({ file }: { file: Ifile }) {
  const dispath = useDispatch();
  const {activeTabId}=useSelector((state:RootState)=>state.fileTreeSlice)
  // Handler
  const onClick = () => {
    const {id, filename, content } = file;
    dispath(setClicedFileAction({ filename, fileContent: content }));
    dispath(setActiveTapId(id))
  };
  return (
    <li
      style={{
        borderTop:file.id===activeTabId?"1px solid white":""
      }}
      onClick={onClick}
      className="px-4 flex items-center gap-1 py-3 text-sm hover:bg-slate-50/5 min:w-28 text-center transition cursor-pointer hover:border-t border-white border-r border-r-white/15"
    >
      <img src="/icons/file.png" width={18} height={18} />
      {file.filename}
      <CloseIcon className="opacity-1" />
    </li>
  );
}

export default OpenfilesBarTap;
