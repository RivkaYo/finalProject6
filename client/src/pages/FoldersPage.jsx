import React from "react";
import {useParams} from "react-router-dom"

const FoldersPage = () => {
  const params = useParams()
  const username=params.username();

  fetch(`http://localhost:3000/${username}`, objOptions)
  .then((res)=>{
    console.log('res: ', res);
  })
  .then((data)=>{
    console.log('data: ', data);

  })
  return (
    <div>
      <h2>This is the Folders page</h2>
      <h2>hi {username}</h2>
    </div>
  );
};

export default FoldersPage;
