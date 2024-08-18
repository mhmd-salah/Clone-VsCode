import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTapId,
  setClicedFileAction,
  setOpendFileAction,
} from "../app/features/fileTree";
import { RootState } from "../app/store";

function DropMenu({
  setShowMenu,
  position: { x, y },
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  position: { x: number; y: number };
}) {
  const { opendFiles, tapIdToRemove } = useSelector(
    (state: RootState) => state.fileTreeSlice
  );
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  const onCloseAllTaps = () => {
    dispatch(setOpendFileAction([]));
    dispatch(setClicedFileAction({ filename: "", fileContent: "" }));
  };
  const onClose = () => {
    const filtred = opendFiles.filter((file) => file.id !== tapIdToRemove);
    dispatch(setOpendFileAction(filtred));
    const lastTap = filtred[filtred.length - 1];
    if (!lastTap) {
      dispatch(setOpendFileAction([]));
      dispatch(
        setClicedFileAction({
          filename: "",
          fileContent: "",
        })
      );
      dispatch(setActiveTapId(""));
      return;
    } else {
      dispatch(
        setClicedFileAction({
          filename: lastTap.filename,
          fileContent: lastTap.content,
        })
      );
    }
  };
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
        className="bg-[#222] w-40 *:text-sm rounded-md *:cursor-pointer divide-y-[1px] divide-[#444] border border-[#333] *:px-4 *:py-2 overflow-hidden"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li className=" hover:bg-teal-700" onClick={onCloseAllTaps}>
          Close All
        </li>
        <li className=" hover:bg-teal-700" onClick={onClose}>
          Close
        </li>
      </ul>
    </div>
  );
}

export default DropMenu;
