import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Navbar from "./components/navbar/Navbar";
import Detail from "./components/todos/Detail";
import Comments from "./components/comments/Comments";
import Photos from "./components/photos/Photos";
import Users from "./components/users/Users";
import UserDetail from "./components/users/UserDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "./components/services/Constants";
import Loading from "./components/loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");
  const [photos, setPhotos] = useState("");
  const [todo, setToDo] = useState("");
  const [comments, setComments] = useState("");

  const getUsers = async () => {
    const user_res = await axios.get(`${baseURL}/users`);
    console.log(user_res);
    const users = await user_res.data;
    console.log(users);
    if (!users.length) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setUser(users);
    }
    console.log("this is post ", users, "*****");
  };
  console.log("this is post ", user, "*****");

  const getToDoList = async () => {
    const list_response = await axios.get(`${baseURL}/todos`);
    const list = await list_response.data;
    if (!list.length) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setToDo(list);
      console.log("******todo****", list);
    }
  };

  console.log("******todo****", todo);

  const getComments = async () => {
    const comment_response = await axios.get(`${baseURL}/comments`);
    const comment = await comment_response.data;
    if (!comment.length) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setComments(comment);
      console.log("comment *****", comment);
    }
  };
  console.log("---------comment---------", comments);

  const getPhotos = async () => {
    const photo_res = await axios.get(`${baseURL}/photos`);
    const photo = await photo_res.data;
    if (!photo.length) {
      setIsLoading(true);
      setPhotos("");
    } else {
      setIsLoading(false);
      setPhotos(photo);
      console.log("---------photos---------", photo);
    }
  };
  console.log("---------comment---------", photos);

  useEffect(() => {
    getUsers();
    getPhotos();
    getToDoList();
    getComments();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route exact path="/" element={<Users users={user} />} />
          <Route exact path="/users" element={<Users users={user} />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route exact path="/todos" element={<Detail info={todo} />} />
          <Route
            exact
            path="/comments"
            element={<Comments comment={comments} />}
          />
          <Route exact path="/photos" element={<Photos photo={photos} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
