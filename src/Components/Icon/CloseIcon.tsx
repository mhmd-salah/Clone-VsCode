
function CloseIcon({className}:Record<string,string>) {
  return (
    <img
      src="/icons/closeIcon.png"
      width={20}
      height={20}
      style={{ marginLeft: 5 }}
      className={`hover:bg-black/50 transition-colors hover:scale-105 ${className}`}
    />
  );
}

export default CloseIcon