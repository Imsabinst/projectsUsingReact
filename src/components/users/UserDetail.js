import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./userdetail.css";
import { baseURL } from "../services/Constants";
import Loading from "../loading/Loading";

const UserDetail = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState(null);

  const getDetailInfo = async () => {
    const user_detail_response = `${baseURL}/users/${id}`;
    const user_details = await axios.get(user_detail_response);
    const user_detail = await user_details.data;
    console.log(user_detail);
    setPostDetails(user_detail);
  };
  useEffect(() => {
    getDetailInfo();
  }, []);

  return (
    <div className="detail__container">
      {postDetails ? (
        <div>
          <h1>Details</h1>

          <div>ID: {postDetails.id}</div>
          <div>Name:{postDetails.name} </div>
          <div>Email: {postDetails.email}</div>
          <div>Phone: {postDetails.phone}</div>
          <div>Username: {postDetails.username}</div>
          <div>Website: {"www." + postDetails.website}</div>
          <div>Company name: {postDetails.company.name}</div>
          <div>Company bs: {postDetails.company.bs}</div>
          <div>Company catchPhrase: {postDetails.company.catchPhrase}</div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserDetail;
