import React from "react";

const RenameBtn = () => {
  function handleRename() {
    alert("entered handle rename func");
    const objOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      //   the following line invary wrong
      body: JSON.stringify({ "path to the file name": "input.value" }),
    };
    // fetch("http://localhost:3000/folderpage", objOptions);
    return (
      <div>
        <input>What should the new name be?</input>
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleRename}>Rename</button>
    </div>
  );
};

export default RenameBtn;
