import { StyleIcon } from "../../styles";

function FileIcon() {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...StyleIcon}
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16H8V4h6v14z" fill="#ddd"/>
    </svg>
  );
}

export default FileIcon