import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const Search = ({ searchData, placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  console.log(searchData);

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = searchData.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleSearch}
        />
      </div>
      <div>
        {filteredData.length === 0 ? (
          <SearchOutlined />
        ) : (
          <CloseOutlined id="clearBtn" onClick={clearInput} />
        )}
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return <p>{value.name} </p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
