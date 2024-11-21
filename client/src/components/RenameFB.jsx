import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RenameFB = ({setChangename,changename ,filename}) => {
  
  const [newFileName, setNewFileName] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);
  const { username } = useParams();
  const { folderName } = useParams();

  function handleSubmitRename() {
    const objOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderName: newFileName }),
    };
    fetch(`http://localhost:3000/${username}/${folderName}/${filename}`, objOptions)
    .then((res) => {
      if (!res.ok) {
        throw new Error("file rename failed");
      }
      return res.json(); 
    })
    .then((data) => {
      console.log("Rename success:", data); 
      setChangename(!changename)
    })
    .catch((error) => {
      console.error("Rename error:", error); 
    })
    .finally(() => {
      setIsRenaming(false); 
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
            className="newnewFileName"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
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

export default RenameFB;
