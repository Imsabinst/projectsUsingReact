import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import ModelDetail from "../users/ModelDetail";
import "./search.css";

const Search = ({ searchData, placeholder }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [info, setInfo] = useState("");
  const [activeModalId, setActiveModalId] = useState("");
  const [search, setSearch] = useState("");

  console.log(searchData, "........--------.......");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filtered = !searchData
    ? searchData
    : searchData.filter((value) => {
        return value.name.toLowerCase().includes(search.toLowerCase());
      });

  const showModal = async (up) => {
    setIsModalVisible(true);
    const url = `https://jsonplaceholder.typicode.com/users/${up.id}`;
    const res = await axios.get(url);
    const info_detail = await res.data;
    console.log(info_detail);
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
    <div>
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
          {info ? <ModelDetail info={info} /> : null}
        </Modal>
      </div>
    </div>
  );
};

export default Search;
