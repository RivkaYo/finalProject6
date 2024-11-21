import React, { useState } from "react";

const RenameBtn = ({ folderName, username }) => {
  const [newFolderName, setnewFolderName] = useState({ folderName });

  function handleSubmitRename() {
    const objOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderName: newFolderName }),
    };
    fetch(`http://localhost:3000/${username}/${folderName}`, objOptions);
  }

  function handleRename() {
    alert("entered handle rename func");
    return (
      <form>
        <input
          placeholder="new name"
          type="text"
          className="newnewFolderName"
          value={newFolderName}
          onChange={(e) => {
            setnewFolderName(e.target.value);
          }}
        />
        <br></br>
        <button
          onClick={(event) => {
            handleSubmitRename(event);
          }}
        >
          Submit change
        </button>
      </form>
    );
  }
  return (
    <div>
      <button onClick={handleRename}>Rename</button>
    </div>
  );
};

export default RenameBtn;
