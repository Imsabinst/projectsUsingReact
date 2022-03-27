import { Table } from "antd";
import Loading from "../loading/Loading";

const Comments = ({ comment }) => {
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Post Id", dataIndex: "postId" },
    { key: "3", title: "Subject", dataIndex: "name" },
    { key: "4", title: "Email", dataIndex: "email" },
    { key: "5", title: "Comments", dataIndex: "body" },
  ];

  return (
    <div>
      {comment ? <Table dataSource={comment} columns={columns} /> : <Loading />}
    </div>
  );
};

export default Comments;
