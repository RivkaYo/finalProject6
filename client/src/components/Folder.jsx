import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OpenFolderBtn from "./OpenFolderBtn";

const Folder = (props) => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        margin: "5px",
        padding: "5px",
        border: "2px,solid,black",
      }}
    >
      <h2>{props.name}</h2>
      <br />
      <OpenFolderBtn folderName={props.name} />
      <RenameBtn />
      <DeleteBtn />
    </div>
  );
};

export default Folder;
