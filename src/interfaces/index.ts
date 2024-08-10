export interface Ifile{
  filename:string,
  isFolder:boolean,
  children?: Ifile[],
  content?:string
}


