import React from "react";
import File from "../components/File";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FileContect = () => {
  const [isChengingContect, setisChengingContect] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [ConC,setConC]= useState(false)

      const [datal, setData] = useState([]);
      const { username } = useParams();
      const { folderName } = useParams();
      const { filename } = useParams();
    
      useEffect(() => {
        const objOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(`http://localhost:3000/${username}/${folderName}/${filename}`, objOptions)
          .then((res) => {
            return res.text();
          })
          .then((data) => {
            console.log("data: ", data);
            setData(data);
          });
      }, [ConC]);

      function handleSubmitC() {
        const objOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newContent: newContent }),
        };
        fetch(`http://localhost:3000/${username}/${folderName}/${filename}`, objOptions)
        .then((res) => {
          if (!res.ok) {
            throw new Error("file rename failed");
          }
          return res.json(); 
        })
        .then((data) => {
          console.log("content success:", data); 
          setConC(!ConC)
        })
        .catch((error) => {
          console.error("contact changing error:", error); 
        })
        .finally(() => {
          setisChengingContect(false); 
        });
      }
    

      function handleEnterchengingCon() {
        setisChengingContect(true);
      }
    
      return (
        <div>
        <h2>This is the file contant page</h2>
        <h2>hi {username}</h2>
        <br />
        {datal}
        <br></br> <br></br>
        <button  onClick={handleEnterchengingCon}>chenge contact</button>
      {isChengingContect && (
        <form>
          <textarea style={{width:"500px", height:"60px"}}
            placeholder="~ new content ~"
            type="text"
            className="newContent"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={handleSubmitC}>
            Submit change
          </button>
        </form>
      )}
      </div>
      );
    };
    
    export default FileContect;
    