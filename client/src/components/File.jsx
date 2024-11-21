import React from "react";
import DeleteBtn from "./DeleteBtn";
import RenameFB from "./RenameFB";
import OpenFolderBtn from "./OpenFolderBtn";

const File = (props) => {
  return (
    <div>
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
        <OpenFolderBtn folderName={props.name}  />
        <RenameFB changename={props.changename} setChangename={props.setChangename} username={props.username} filename={props.name}/>
        <DeleteBtn cen={props.cen} setCen={props.setCen} filename={props.name}/>
      </div>
    </div>
  );
};

export default File;
