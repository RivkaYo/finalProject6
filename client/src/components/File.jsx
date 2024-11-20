import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";

const File = () => {
  return (
    <div>
      <h1>This is a file</h1>
      <br />
      <RenameBtn />
      <DeleteBtn />
    </div>
  );
};

export default File;
