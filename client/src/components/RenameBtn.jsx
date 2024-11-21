import React, { useState } from "react";

const RenameBtn = ({ folderName, username }) => {
  const [newFolderName, setNewFolderName] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);

  function handleSubmitRename() {
    const objOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderName: newFolderName }),
    };
    fetch(`http://localhost:3000/${username}/${folderName}`, objOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Rename success:", data);
        setIsRenaming(false);
      })
      .catch((error) => {
        console.error("Rename error:", error);
        setIsRenaming(false);
      });
    //maybe put setIsRenaming(false); in finnaly.
  }

  function handleEnterRename() {
    setIsRenaming(true);
  }

  return (
    <div>
      <button onClick={handleEnterRename}>Rename</button>
      {isRenaming && (
        <form>
          <input
            placeholder="new name"
            type="text"
            className="newnewFolderName"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={handleSubmitRename}>
            Submit change
          </button>
        </form>
      )}
    </div>
  );
};

export default RenameBtn;
