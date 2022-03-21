import { useState, useEffect } from "react";
import axios from "axios";
import { Space, Spin } from "antd";
import Search from "../search/Search";

const Users = () => {
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    console.log(response);
    const posts = await response.data;
    console.log(posts);
    if (!posts.length) {
      setIsLoading(true);
      setPost("");
    } else {
      setIsLoading(false);
      setPost(posts);
    }
    console.log("this is post ", post, "*****");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {post ? <Search placeholder="Search..." searchData={post} /> : null}

      <div className="card__container">
        {isLoading ? (
          <Space size="middle">
            <Spin size="large" />
          </Space>
        ) : null}
      </div>
    </div>
  );
};

export default Users;
