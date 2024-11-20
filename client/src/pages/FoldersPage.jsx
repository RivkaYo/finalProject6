import React from "react";
import Folder from "../components/Folder";

const FoldersPage = ({ username }) => {
  return (
    <div>
      <h2>This is the Folders page</h2>
      <h2>hi {username}</h2>
      <br />
      {/* some sort of for loop that gets frim server the folders and creates a folder component for each */}
      <Folder />
    </div>
  );
};

export default FoldersPage;
