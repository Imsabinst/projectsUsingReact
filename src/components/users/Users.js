import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Search from "../search/Search";
import { baseURL } from "../services/Constants";

const Users = () => {
  const [user, setUser] = useState("");

  const getUsers = async () => {
    const user_res = await axios.get(`${baseURL}/users`);
    const users = await user_res.data;
    setUser(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {user ? (
        <Search placeholder="Search..." searchData={user} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Users;
