import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState("");

  const getPhotos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const res = await axios.get(url);
    const photo_res = await res.data;
    setPhotos(photo_res);
  };
  useEffect(() => {
    getPhotos();
  }, []);
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
      <Table dataSource={photos} columns={columns} />
    </div>
  );
};

export default Photos;
