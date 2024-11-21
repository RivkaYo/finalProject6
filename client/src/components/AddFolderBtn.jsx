import React, { useState } from "react";

const AddFolderBtn = ({ username }) => {
  const [newFolderName, setNewFolderName] = useState("");
  const [isNaming, setIsNaming] = useState(false);

  function handleSubmitName() {
    const objOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderName: newFolderName, username: username }),
    };
    fetch(`http://localhost:3000/folderpage`, objOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Name success:", data);
        setIsNaming(false);
      })
      .catch((error) => {
        console.error("Name error:", error);
        setIsNaming(false);
      });
  }

  function handleEnterName() {
    setIsNaming(true);
  }

  return (
    <div>
      <button onClick={handleEnterName}>Add Folder</button>
      {isNaming && (
        <form>
          <input
            placeholder="folder name"
            type="text"
            className="newnewFolderName"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={handleSubmitName}>
            Submit folder Name
          </button>
        </form>
      )}
    </div>
  );
};

export default AddFolderBtn;
