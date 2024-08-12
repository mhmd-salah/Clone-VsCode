interface Ifile {
  filename: string;
  isFolder: boolean;
  children?: Ifile[];
  content?: string;
}

export const fileTree: Ifile = 
  {
    filename: "vscode",
    isFolder: true,
    children: [
      {
        filename: "node_modules",
        isFolder: true,
        children: [
          {
            filename: ".vite",
            isFolder: true,
            children: [
              {
                filename: "react.js",
                isFolder: false,
              },
            ],
          },
          {
            filename: "package.json",
            isFolder: false,
          },
        ],
      },
      {
        filename: "index.html",
        isFolder: false,
      },
      {
        filename: "style.css",
        isFolder: false,
      },
      {
        filename: "vite.config.ts",
        isFolder:false
      }
    ],
  }
