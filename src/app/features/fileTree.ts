import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ifile } from "../../interfaces";

interface IclickedFile {
  filename: string;
  fileContent: string|undefined;
}
interface IinitialState {
  opendFiles: Ifile[];
  clickedFiles: IclickedFile;
  activeTabId:string|null
}

const initialState: IinitialState = {
  opendFiles: [],
  activeTabId:null,
  clickedFiles: {
    filename: "",
    fileContent: "",
  },  
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpendFileAction: (state, action: PayloadAction<Ifile[]>) => {
      state.opendFiles = action.payload;
    },
    setClicedFileAction: (state, action: PayloadAction<IclickedFile>) => {
      state.clickedFiles = action.payload;
    },
    setActiveTapId:(state,action:PayloadAction<string>)=>{
      state.activeTabId = action.payload;
    }
  },
});
export default fileTreeSlice.reducer;
export const { setOpendFileAction, setClicedFileAction,setActiveTapId } = fileTreeSlice.actions;
