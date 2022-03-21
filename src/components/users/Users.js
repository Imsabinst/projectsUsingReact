import { useState, useEffect } from "react";
import axios from "axios";
import "./users.css";
import { Button, Modal, Space, Spin } from "antd";
import ModelDetail from "./ModelDetail";

const Users = () => {
  const [post, setPost] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState("");
  const [activeModalId, setActiveModalId] = useState("");

  const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
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

  const showModal = async (up) => {
    setIsModalVisible(true);
    const url = `https://jsonplaceholder.typicode.com/users/${up.id}`;
    const res = await axios.get(url);
    const info_detail = await res.data;
    console.log(info_detail);
    setInfo(info_detail);
    setActiveModalId(null);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="card__container">
        {isLoading ? (
          <Space size="middle">
            <Spin size="large" />
          </Space>
        ) : null}

        {post &&
          post.map((up) => {
            return (
              <div className="card" key={up.id}>
                <div>
                  <p>{up.name}</p>
                  <p>{up.email}</p>

                  <Button
                    loading={up.id == activeModalId}
                    type="primary"
                    onClick={() => {
                      setActiveModalId(up.id);
                      showModal(up);
                    }}
                  >
                    Show details
                  </Button>
                </div>
              </div>
            );
          })}

        <Modal
          title="User Details"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {info ? <ModelDetail info={info} /> : null}
        </Modal>
      </div>
    </div>
  );
};

export default Users;
