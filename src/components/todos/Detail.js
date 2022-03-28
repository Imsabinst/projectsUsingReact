import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { baseURL } from "../services/Constants";

const Detail = () => {
  const [todo, setToDo] = useState("");

  const getToDoList = async () => {
    const list_response = await axios.get(`${baseURL}/todos`);
    const list = await list_response.data;
    setToDo(list);
  };

  console.log("******todo****", todo);
  useEffect(() => {
    getToDoList();
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
      {todo ? <Table dataSource={todo} columns={columns} /> : <Loading />}
    </div>
  );
};

export default Detail;
