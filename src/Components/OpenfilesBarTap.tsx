import { Ifile } from "../interfaces";
import CloseIcon from "./Icon/CloseIcon";

function OpenfilesBarTap({ file }: { file: Ifile }) {
  return (
    <li className="px-4 flex items-center gap-1 py-3 text-sm hover:bg-slate-50/5 min:w-28 text-center transition cursor-pointer hover:border-t border-white border-r border-r-white/15">
      <img src="/icons/file.png" width={18} height={18} />
      {file.filename}
      <CloseIcon />
    </li>
  );
}

export default OpenfilesBarTap;
