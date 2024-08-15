export interface Ifile{
  id:string;
  filename:string,
  isFolder:boolean,
  children?: Ifile[],
  content?:string
}


  



