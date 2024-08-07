import FileIcon from './Icon/FileIcon';

function FileComponent({fileName}:{fileName:string}) {
  return (
    <div className="flex items-center">
      <span>
        <FileIcon />
      </span>
      <span>{fileName}</span>
    </div>
  );
}

export default FileComponent