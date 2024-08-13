import { Ifile } from "../interfaces";

export const doseFileObjectExist =(arr:Ifile[],id:number)=>{
  return arr.some(obj=>obj.id === id)
}