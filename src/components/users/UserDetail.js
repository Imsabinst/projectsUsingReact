import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseURL } from "../services/Constants";
import Loading from "../loading/Loading";
import "./userdetail.css";

const UserDetail = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState(null);

  const getDetailInfo = async () => {
    const user_detail_response = `${baseURL}/users/${id}`;
    const user_details = await axios.get(user_detail_response);
    const user_detail = await user_details.data;
    setPostDetails(user_detail);
  };

  useEffect(() => {
    getDetailInfo();
  }, []);

  return (
    <div className="detail__container">
      {postDetails ? (
        <div>
          <div>
            ID: <b>{postDetails.id}</b>
          </div>
          <div>
            Name: <b>{postDetails.name}</b>
          </div>
          <div>
            Email: <b>{postDetails.email}</b>
          </div>
          <div>
            Phone: <b> {postDetails.phone}</b>
          </div>
          <div>
            Username: <b>{postDetails.username}</b>
          </div>
          <div>
            Website: <b>{"www." + postDetails.website}</b>
          </div>
          <div>
            Company name: <b>{postDetails.company.name}</b>
          </div>
          <div>
            Company bs: <b>{postDetails.company.bs}</b>
          </div>
          <div>
            Company catchPhrase: <b>{postDetails.company.catchPhrase}</b>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserDetail;
