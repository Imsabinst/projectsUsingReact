import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import Loading from "../loading/Loading";
import { baseURL } from "../services/Constants";
import ModelDetail from "../users/ModelDetail";
import "./search.css";

const Search = ({ searchData, placeholder }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [info, setInfo] = useState("");
  const [activeModalId, setActiveModalId] = useState("");
  const [search, setSearch] = useState("");

  console.log(searchData, "........first----> search data.......");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !searchData
    ? searchData
    : searchData.filter((value) => {
        console.log("----this is value----", value);
        return value.name.toLowerCase().includes(search.toLowerCase());
      });
  console.log(filtered, "........filtering.......");

  const showModal = async (up) => {
    setIsModalVisible(true);
    const url = `${baseURL}/users/${up.id}`;
    const res = await axios.get(url);
    const info_detail = await res.data;
    setInfo(info_detail);
    setActiveModalId(null);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="main">
      <div className="search__cotainer">
        <input
          className="search"
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="user__list">
        {filtered.map((up) => {
          return (
            <div className="card" key={up.id}>
              <p>{up.name}</p>
              <p>{up.email}</p>

              <Button
                className="btn__info"
                loading={up.id == activeModalId}
                type="primary"
                onClick={() => {
                  setActiveModalId(up.id);
                  showModal(up);
                }}
              >
                Show details
              </Button>
            </div>
          );
        })}
        <Modal
          title="User Details"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {info ? <ModelDetail info={info} /> : <Loading />}
        </Modal>
      </div>
    </div>
  );
};

export default Search;
