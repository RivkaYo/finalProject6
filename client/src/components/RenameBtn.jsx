import React from "react";

const RenameBtn = () => {
  function handleRename() {
    alert("entered handle rename func");
  }
  return (
    <div>
      <button onClick={handleRename}>Rename</button>
    </div>
  );
};

export default RenameBtn;
