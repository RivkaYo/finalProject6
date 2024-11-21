import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilesPage = () => {
  const { username, folderName } = useParams();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const objOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:3000/${username}/${folderName}`, objOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched files: ", data);
        setFiles(data);
      });
  }, [username, folderName]);

  return (
    <div>
      <h2>
        Files in {folderName} for {username}
      </h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilesPage;
