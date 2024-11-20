import React from "react";
import File from "../components/File";

const FilesPage = () => {

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
      arr.push(<files name={datal[i]} />);
    }
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
