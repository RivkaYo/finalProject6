import React from "react";

const DeleteBtn = () => {
  function handleDelete() {
    alert("entered handle delete function");
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBtn;
