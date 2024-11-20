import React from "react";

const DeleteBtn = ({ folderId, fileId }) => {
  async function handleDelete() {
    alert("entered handle delete function");
    const objOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    const url = `http://localhost:3000/folders/${folderId}/files/${fileId}`;
    try {
      const res = await fetch(url, objOptions);
      if (res.ok) {
        alert("Delete successful!");
      } else {
        alert("Delete failed!");
      }
    } catch (error) {
      console.error("Error during delete:", error);
      alert("An error occurred while trying to delete.");
    }
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBtn;
