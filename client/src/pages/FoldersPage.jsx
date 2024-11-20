import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Folder from "../components/Folder";

const FoldersPage = () => {
  const [datal,setData]= useState([])
  let folders=[];
  const {username} =useParams();
  console.log('username: ', username);

  useEffect(()=>{
    const objOptions={
      method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    }

    fetch(`http://localhost:3000/${username}`, objOptions)
    .then((res)=>{
     return res.json();
    })
    .then((data)=>{
      console.log('data: ', data);
      folders=data;
      setData(data)
    })
  },[])
  
  function showf(){
    let arr=[]
    for(let i=0;i<datal.length;i++){
      arr.push( <Folder name={datal[i]}/>)
    }
    return arr;
  }
  



  return (
    <div>
      <h2>This is the Folders page</h2>
      <h2>hi {username}</h2>
      <br />
      {/* some sort of for loop that gets frim server the folders and creates a folder component for each */}
      {/* <Folder /> */}
      {showf()}
    </div>
  );
};

export default FoldersPage;
