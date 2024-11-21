import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OpenFolderBtn from "./OpenFolderBtn";
import { useParams } from "react-router-dom";

const Folder = ({ name }) => {

  const { username } = useParams();

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        margin: "5px",
        padding: "5px",
        border: "2px,solid,black",
      }}
    >
      <h2>{name}</h2>
      <br />
      <OpenFolderBtn username={username} folderName={name} />
      <RenameBtn username={username} folderName={name} />
      <DeleteBtn />
    </div>
  );
};

export default Folder;
