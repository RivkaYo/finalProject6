import React from "react";
import { useNavigate } from "react-router-dom";
import FilesPage from "../pages/FilesPage";

const OpenFolderBtn = ({ folderName }) => {
  const navigate = useNavigate();
  function handleOpenFolder() {
    console.log(`entered handle open folder btn from ${folderName}`);
    navigate(folderName);
  }
  return (
    <div>
      <button onClick={handleOpenFolder}>Open Folder</button>
    </div>
  );
};

export default OpenFolderBtn;
