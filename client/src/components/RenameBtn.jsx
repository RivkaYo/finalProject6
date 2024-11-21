import React, { useState } from "react";

const RenameBtn = ({ folderName, username ,setchanged,changed}) => {
  
  const [newFolderName, setNewFolderName] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);

  function handleSubmitRename() {
    const objOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderName: newFolderName }),
    };
    fetch(`http://localhost:3000/${username}/${folderName}`, objOptions)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Folder rename failed");
      }
      return res.json(); // Parse the response as JSON
    })
    .then((data) => {
      console.log("Rename success:", data); // Handle success
      setchanged(!changed)
    })
    .catch((error) => {
      console.error("Rename error:", error); // Handle error
    })
    .finally(() => {
      setIsRenaming(false); // Ensure this runs regardless of success or failure
    });
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
