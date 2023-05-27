import React from "react";
import Navbar from "../components/Navbar";
import { studentInfo } from "../Data/studentData";
import CardComponent from "../components/CardComponent";
import "./Database.css";
import { useNavigate } from "react-router-dom";
const Database = () => {
  // const studentInfo = [];
  // const [studentInfo, setStudentInfo] = useState([]);

  const navigate = useNavigate();

  return (
    <>
      <Navbar title="Home" />
      <div className="allCards">
        {studentInfo.map((student, index) => (
          <CardComponent
            // nextPage={`/student/${index + 1}`}
            id={student.id}
            name={student.name}
            age={student.age}
            classs={student.class}
            department={student.department}
            email={student.email}
            key={student.email}
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
      {/* <AddNewData studentinfoprops={setStudentInfo} />; */}
    </>
  );
};

export default Database;
