export interface Ifile{
  name:string,
  isFolder:boolean,
  children?: Ifile[],
  content?:string
}
