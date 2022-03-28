import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { baseURL } from "../services/Constants";

const Comments = () => {
  const [comments, setComments] = useState("");

  const getComments = async () => {
    const comment_response = await axios.get(`${baseURL}/comments`);
    const comment = await comment_response.data;
    setComments(comment);
  };
  useEffect(() => {
    getComments();
  }, []);

  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Post Id", dataIndex: "postId" },
    { key: "3", title: "Subject", dataIndex: "name" },
    { key: "4", title: "Email", dataIndex: "email" },
    { key: "5", title: "Comments", dataIndex: "body" },
  ];

  return (
    <div>
      {comments ? (
        <Table dataSource={comments} columns={columns} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Comments;
