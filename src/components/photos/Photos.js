import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { baseURL } from "../services/Constants";

const Photos = () => {
  const [photos, setPhotos] = useState("");

  const getPhotos = async () => {
    const photo_res = await axios.get(`${baseURL}/photos`);
    const photo = await photo_res.data;
    setPhotos(photo);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Album ID", dataIndex: "albumId" },
    { key: "3", title: "Title", dataIndex: "title" },
    /* {
      key: "4",
      title: "Url",
      dataIndex: "url",
    },
    { key: "5", title: "Image", dataIndex: "thumbnailUrl" }, */
  ];
  return (
    <div>
      {photos ? <Table dataSource={photos} columns={columns} /> : <Loading />}
    </div>
  );
};

export default Photos;
