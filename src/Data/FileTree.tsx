interface Ifile {
  id:number;
  filename: string;
  isFolder: boolean;
  children?: Ifile[];
  content?: string;
}

export const fileTree: Ifile = 
  {
    id:Date.now(),
    filename: "vscode",
    isFolder: true,
    children: [
      {
        id:Date.now(),
        filename: "node_modules",
        isFolder: true,
        children: [
          {
            id:Date.now(),
            filename: ".vite",
            isFolder: true,
            children: [
              {
                id:Date.now(),
                filename: "react.js",
                isFolder: false,
              },
            ],
          },
          {
            id:Date.now(),
            filename: "package.json",
            isFolder: false,
          },
        ],
      },
      {
        id:Date.now(),
        filename: "index.html",
        isFolder: false,
      },
      {
        id:Date.now(),
        filename: "style.css",
        isFolder: false,
      },
      {
        id:Date.now(),
        filename: "vite.config.ts",
        isFolder:false
      }
    ],
  }
