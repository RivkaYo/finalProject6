import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";

const Folder = () => {
  return (
    <div>
      <h1>This is a folder</h1>
      <br />
      <RenameBtn />
      <DeleteBtn />
    </div>
  );
};

export default Folder;
