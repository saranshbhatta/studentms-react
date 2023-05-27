import React from "react";
import "./AddNewData.css";
import { useState } from "react";
import { studentInfo } from "../Data/studentData";
import { useNavigate } from "react-router-dom";
// console.log(studentInfo);

const AddNewData = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    studentInfo.push({ ...studentData, id: studentInfo.length + 1 });
    navigate("/database");
  };

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="formContainer">
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          ></input>
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Class"
            name="class"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Department"
            name="department"
            onChange={handleChange}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          ></input>
          <button className="addBtn" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewData;
