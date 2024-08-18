import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {  setClicedFileAction, setOpendFileAction } from "../app/features/fileTree";

function DropMenu({
  setShowMenu,
  position: { x, y },
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  position: { x: number; y: number };
}) {
  const Dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  const onCloseAllTaps = ()=>{
    Dispatch(setOpendFileAction([]));
    Dispatch(setClicedFileAction({filename:"",fileContent:""}));
  }
  useEffect(() => {
    const handleClickOutside = () => {
      setShowMenu(false);
      console.log(menuRef.current);
      
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef}>
      <ul
        className="bg-[#222] w-40 *:text-sm rounded-md *:cursor-pointer divide-y-[1px] divide-[#444] border border-[#333]"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li className="px-4 py-3" onClick={onCloseAllTaps}>Close All</li>
        <li className="px-4 py-3">Close</li>
      </ul>
    </div>
  );
}

export default DropMenu;
