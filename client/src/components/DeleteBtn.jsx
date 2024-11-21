import React from "react";
import { useParams } from "react-router-dom";

const DeleteBtn = (props) => {
  const { username } = useParams();
  const { folderName } = useParams();

  async function handleDelete() {
    fetch(`http://localhost:3000/${username}/${folderName}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename: `${props.filename}` })
    })
      .then(res => res.json())
      .then(data => {
        props.setCen(!props.cen)
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBtn;
