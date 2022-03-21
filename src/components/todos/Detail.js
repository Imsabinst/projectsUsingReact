import { Space, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(setLoading(false));
  }, []);
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "User Id", dataIndex: "userId" },
    { key: "3", title: "Title", dataIndex: "title" },
    {
      key: "4",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In progress"}</p>;
      },
    },
  ];

  return (
    <div>
      {loading ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : null}
      <Table dataSource={info} columns={columns} />
    </div>
  );
};

export default Detail;
