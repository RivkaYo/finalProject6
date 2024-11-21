import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OpenFolderBtn from "./OpenFolderBtn";

const File = (props) => {
  return (
    <div>
       <div style={{backgroundColor:"whitesmoke",margin:"5px",padding:"5px",border:"2px,solid,black"}}>
      {/* <h1>This is a folder</h1> */}
      <h2>{props.name}</h2>
      <br />
      <OpenFolderBtn folderName={(props.name)} />
      <RenameBtn />
      <DeleteBtn />
    </div>
    </div>
  );
};

export default File;
