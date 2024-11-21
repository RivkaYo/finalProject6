import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OpenFolderBtn from "./OpenFolderBtn";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Folder = ({ name,setchanged,changed }) => {

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
      <RenameBtn username={username} folderName={name} setchanged={setchanged} changed={changed} />
      <DeleteBtn />
    </div>
  );
};

export default Folder;
