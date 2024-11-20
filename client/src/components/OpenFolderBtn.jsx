import React from "react";
import { useNavigate } from "react-router-dom";

const OpenFolderBtn = ({ folderName }) => {
  const navigate = useNavigate();
  function handleOpenFolder() {
    alert(`entered handle open folder btn from ${folderName}`);
    navigate(Files.jsx);
  }
  return (
    <div>
      <button onClick={handleOpenFolder}>Open Folder</button>
    </div>
  );
};

export default OpenFolderBtn;
