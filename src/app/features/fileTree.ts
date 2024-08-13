import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ifile } from "../../interfaces";

interface IclickedFile{
  filename: string;
  fileContent: string;
}
interface IinitialState{
  opendFiles: Ifile[];
  clickedFiles:IclickedFile
}

const initialState:IinitialState = {
  opendFiles: [],
  clickedFiles: {
    filename: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpendFile:(state,action:PayloadAction<Ifile[]>)=>{
      state.opendFiles=action.payload;
    }
  },
});
export default fileTreeSlice.reducer;
export const{setOpendFile} = fileTreeSlice.actions;