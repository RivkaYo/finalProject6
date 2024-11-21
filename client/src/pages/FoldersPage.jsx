import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Folder from "../components/Folder";

const FoldersPage = () => {
  const [datal, setData] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const objOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:3000/${username}`, objOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  function showf() {
    let arr = [];
    for (let i = 0; i < datal.length; i++) {
      arr.push(<Folder key={i} name={datal[i]} />);
    }
    return arr;
  }

  return (
    <div>
      <h2>This is the Folders page</h2>
      <h2>hi {username}</h2>
      <br />
      {showf()}
    </div>
  );
};

export default FoldersPage;
