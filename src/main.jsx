import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";
import { Homepage } from "./routes/Homepage.jsx";
import { PostListPage } from "./routes/PostListPage.jsx";
import { SinglePostPage } from "./routes/SinglePostPage.jsx";
import { Write } from "./routes/Write.jsx";
import { LoginPage } from "./routes/LoginPage.jsx";
import { RegisterPage } from "./routes/RegisterPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage } />
        <Route path="/posts" Component={PostListPage} />
        <Route path="/:slug" Component={SinglePostPage} />
        <Route path="/write" Component={Write} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
