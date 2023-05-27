// import StudentPage from "../pages/StudentPage";
import "./Component.css";
// import { useNavigate } from "react-router-dom";

const CardComponent = ({
  name,
  age,
  classs,
  department,
  email,
  id,
}) => {
  return (
    <>
      <div className="cardContainer">
        <p>id: {id} </p>
        <p>name: {name} </p>
        <p>age: {age} </p>
        <p>class: {classs} </p>
        <p>department: {department} </p>
        <p>email: {email} </p>
      </div>
      
    </>
  );
};

export default CardComponent;
