import { useNavigate } from "react-router-dom";
import { studentInfo } from "../Data/studentData";
import "./Component.css";

const CardComponent = ({ name, age, classs, department, email, id, newArr }) => {
  console.log("card component ko new arr", newArr);
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log("id = ", id);
    let ind = studentInfo.indexOf(
      studentInfo.find((student) => student.id === id)
    );
    console.log(ind);
    console.log(studentInfo.splice(ind, 1));

    navigate("/database");
  };
  return (
    <>
      <div className="cardContainer">
        <p>id: {id} </p>
        <p>name: {name} </p>
        <p>age: {age} </p>
        <p>class: {classs} </p>
        <p>department: {department} </p>
        <p>email: {email} </p>
        <button className="delBtn" onClick={handleDelete}>
          Delete
        </button>
      </div>
 
    </>
  );
};

export default CardComponent;
