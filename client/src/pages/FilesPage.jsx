import React from "react";
import File from "../components/File";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilesPage = () => {
console.log("hi");
  const [datal, setData] = useState([]);
  let files = [];
  const { username } = useParams();
  console.log('username: ', username);
  const { folderName } = useParams();
  console.log("folderName: ", folderName);

  useEffect(() => {
    const objOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:3000/${username}/${folderName}`, objOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data: ", data);
        files = data;
        setData(data);
      });
  }, []);

  function showf() {
    let arr = [];
    for (let i = 0; i < datal.length; i++) {
      arr.push(<File name={datal[i]} />);
    }
    console.log('arr: ', arr);
    return arr;
  }
  return (
    <div>
    <h2>This is the files page</h2>
    <h2>hi {username}</h2>
    <br />
    {showf()}
  </div>
  );
};

export default FilesPage;
