import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./userdetail.css";

const UserDetail = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState(null);

  const getDetailInfo = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await axios.get(url);
    const info_detail = await res.data;
    console.log(info_detail);
    setPostDetails(info_detail);
  };
  useEffect(() => {
    getDetailInfo();
  }, []);

  return (
    <div className="detail__container">
      <div>
        <h1>Details</h1>

        <div>ID: {postDetails?.id}</div>
        <div>Name:{postDetails?.name} </div>
        <div>Email: {postDetails?.email}</div>
        <div>Phone: {postDetails?.phone}</div>
        <div>Username: {postDetails?.username}</div>
        <div>Website: {"www." + postDetails?.website}</div>
        <div>Company name: {postDetails?.company.name}</div>
        <div>Company bs: {postDetails?.company.bs}</div>
        <div>Company catchPhrase: {postDetails?.company.catchPhrase}</div>
      </div>
    </div>
  );
};

export default UserDetail;
