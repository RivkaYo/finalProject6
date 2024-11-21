import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FoldersPage from "./pages/FoldersPage";
import LayoutPage from "./pages/LayoutPage";
import NoPage from "./pages/NoPage";
import Folder from "./components/Folder";
import FilesPage from "./pages/FilesPage";
import File from "./components/File";
import FileContect from "./pages/FileContect";

function App() {
  const [username, setUsername] = useState("");
  const [currFolder, seCurrFolder] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              index
              element={
                <LoginPage setUsername={setUsername} username={username} />
              }
            />
            <Route path=":username" element={<FoldersPage />} /> 
            <Route path=":username/:folderName" element={<FilesPage />} /> 
            <Route path=":username/:folderName/:filename" element={<FileContect />} /> 
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
