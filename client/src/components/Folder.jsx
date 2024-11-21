import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OpenFolderBtn from "./OpenFolderBtn";

const Folder = ({ folderName, username }) => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        margin: "5px",
        padding: "5px",
        border: "2px,solid,black",
      }}
    >
      <h2>{folderName}</h2>
      <br />
      <OpenFolderBtn username={username} folderName={folderName} />
      <RenameBtn username={username} folderName={folderName} />
      <DeleteBtn />
    </div>
  );
};

export default Folder;
