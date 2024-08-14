import { v4 as uuidv4 } from "uuid";

interface Ifile {
  id: string;
  filename: string;
  isFolder: boolean;
  children?: Ifile[];
  content?: string;
}

export const fileTree: Ifile = {
  id: uuidv4(),
  filename: "vscode",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      filename: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          filename: ".vite",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              filename: "react.js",
              isFolder: false,
              content: "React js Content",
            },
          ],
        },
        {
          id: uuidv4(),
          filename: "package.json",
          isFolder: false,
          content: "{open:true}",
        },
      ],
    },
    {
      id: uuidv4(),
      filename: "index.html",
      isFolder: false,
      content: "<h1>hello world<h1/>",
    },
    {
      id: uuidv4(),
      filename: "style.css",
      isFolder: false,
      content: "h1:{background-black}",
    },
    {
      id: uuidv4(),
      filename: "vite.config.ts",
      isFolder: false,
      content: "server:{port:300}",
    },
  ],
};
