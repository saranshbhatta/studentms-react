// import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { studentInfo } from "../Data/studentData";
import CardComponent from "../components/CardComponent";
import "./Database.css";
import { useNavigate } from "react-router-dom";
const Database = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="allCards">
        {studentInfo.length === 0 && <h1>No Data Of student</h1>}
        {studentInfo.map((student) => (
          <CardComponent
            id={student.id}
            name={student.name}
            age={student.age}
            classs={student.class}
            department={student.department}
            email={student.email}
            key={student.id}
          />
        ))}
        <div className="addNewData">
          <button
            className="addDataBtn"
            onClick={() => {
              navigate("/new-student");
            }}
          >
            Add New Data
          </button>
        </div>
      </div>
    </>
  );
};

export default Database;
