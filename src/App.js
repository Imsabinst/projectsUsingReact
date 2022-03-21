import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Navbar from "./components/navbar/Navbar";
import Detail from "./components/todos/Detail";
import Comments from "./components/comments/Comments";
import Photos from "./components/photos/Photos";
import Users from "./components/users/Users";
import UserDetail from "./components/users/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route exact path="/todos" element={<Detail />} />
        <Route exact path="/comments" element={<Comments />} />
        <Route exact path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
