export interface Ifile{
  id:number;
  filename:string,
  isFolder:boolean,
  children?: Ifile[],
  content?:string
}


