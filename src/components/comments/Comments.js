import { Table } from "antd";
import React, { useEffect, useState } from "react";

const Comments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(setLoading(false));
  }, []);
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Post Id", dataIndex: "postId" },
    { key: "3", title: "Subject", dataIndex: "name" },
    { key: "4", title: "Email", dataIndex: "email" },
    { key: "5", title: "Comments", dataIndex: "body" },
  ];

  return <Table loading={loading} dataSource={info} columns={columns} />;
};

export default Comments;
