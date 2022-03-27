import { Table } from "antd";
import Loading from "../loading/Loading";

const Detail = ({ info }) => {
  console.log(info);
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
      {info ? <Table dataSource={info} columns={columns} /> : <Loading />}
    </div>
  );
};

export default Detail;
