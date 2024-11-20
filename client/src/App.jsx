import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FoldersPage from "./pages/FoldersPage";
import LayoutPage from "./pages/LayoutPage";
import NoPage from "./pages/NoPage";
import Folder from "./components/Folder";
import File from "./components/File";

function App() {
  const [username, setUsername] = useState("");

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
            <Route
              path={`${username}`}
              element={<FoldersPage username={username} />}
            >
              <Route
                path={`${folderId}`}
                element={<Folder folder={folderId} />}
              >
                <Route path={`${fileId}`} element={<File />} />
              </Route>
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
