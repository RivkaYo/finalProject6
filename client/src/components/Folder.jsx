import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";

const Folder = (props) => {
  return (
    <div style={{backgroundColor:"whitesmoke",margin:"5px",padding:"5px",border:"2px,solid,black"}}>
      {/* <h1>This is a folder</h1> */}
      <h2>{props.name}</h2>
      <br />
      <RenameBtn />
      <DeleteBtn />
    </div>
  );
};

export default Folder;
