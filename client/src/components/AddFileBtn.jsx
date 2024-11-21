import React, { useState } from "react";

const AddFileBtn = ({ username, folderName }) => {
  const [newfileName, setNewfileName] = useState("");
  const [isNaming, setIsNaming] = useState(false);

  function handleSubmitName() {
    const objOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: newfileName,
        username: username,
        folderName: folderName,
      }),
    };
    fetch(`http://localhost:3000/filepage`, objOptions)
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
      <button onClick={handleEnterName}>Add file</button>
      {isNaming && (
        <form>
          <input
            placeholder="file name"
            type="text"
            className="newnewfileName"
            value={newfileName}
            onChange={(e) => setNewfileName(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={handleSubmitName}>
            Submit file Name
          </button>
        </form>
      )}
    </div>
  );
};

export default AddFileBtn;
