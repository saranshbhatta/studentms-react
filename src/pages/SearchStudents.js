import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./SearchStudents.css";
import { studentInfo } from "../Data/studentData";
import CardComponent from "../components/CardComponent";

const SearchStudents = () => {
  let newArr = [];
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSelect = () => {
    console.log(document.getElementById("option").value);
    setSearchValue(document.getElementById("option").value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
    newArr = studentInfo.filter(
      (student) => student.name.toLowerCase() === inputValue.toLowerCase()
    );

    console.log(newArr);
    // console.log(inputValue);
  };
  return (
    <>
      <Navbar />
      <div className="searchContainer">
        <div className="sidebarFilter">
          <label htmlFor="searchBy">Choose an Option to search with:</label>
          <select name="option" id="option">
            <option value="name">Name</option>
            <option value="class">Class</option>
            <option value="department">Department</option>
          </select>
          <button className="btn searchBtn" onClick={handleSelect}>
            Search
          </button>
        </div>
        <div className="searchBarContainer">
          <input
            type="text"
            placeholder="Search Students ....."
            id="searchEl"
            onChange={handleChange}
          ></input>
          <button className="searchBtn" onClick={handleSearch}>
            Search Student
          </button>
          <div className="searchResults">
            {newArr.map((item) => (
              <CardComponent
                newArr={newArr}
                id={item.id}
                name={item.name}
                age={item.age}
                classs={item.class}
                department={item.department}
                email={item.email}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchStudents;
