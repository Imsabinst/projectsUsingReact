import { Table } from "antd";
import Loading from "../loading/Loading";

const Photos = ({ photo }) => {
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Album ID", dataIndex: "albumId" },
    { key: "3", title: "Title", dataIndex: "title" },
    {
      key: "4",
      title: "Url",
      dataIndex: "url",
    },
    { key: "5", title: "Image", dataIndex: "thumbnailUrl" },
  ];
  return (
    <div>
      {photo ? <Table dataSource={photo} columns={columns} /> : <Loading />}
    </div>
  );
};

export default Photos;
