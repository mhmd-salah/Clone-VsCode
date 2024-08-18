import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenfilesBarTap from "./OpenfilesBarTap";
import React, { useState } from "react";
import DropMenu from "../Ui/DropMenu";

function OpendBar() {
  const { opendFiles } = useSelector((state: RootState) => state.fileTreeSlice);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const clickX = e.clientX;
    const clickY = e.clientY;
    const menuW = 160;
    const menuH = 90;
    let x = clickX;
    let y = clickY;
    if (clickX + menuW > screenWidth) {
      x = screenWidth - menuW;
    }
    if (clickY + menuH > screenHeight) {
      y = screenHeight - menuH;
    }
    setMenuPosition({ x, y });
    setShowMenu(true);
  };
  return (
    <div
      className="w-[calc(100vw-256px )] h-[44] "
      onContextMenu={handleContextMenu}
    >
      <ul className="flex items-center transition h-[47] ">
        {opendFiles &&
          opendFiles.map((file) => {
            return <OpenfilesBarTap file={file} key={file.id} />;
          })}
      </ul>
      {showMenu && (
        <DropMenu position={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
}

export default OpendBar;
