// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Database from "./pages/Database";
import AddNewData from "./pages/AddNewData";
import SearchStudents from "./pages/SearchStudents";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home /> }/>
          <Route path= "/database" element={<Database /> }/>
          <Route path= "/new-student" element={<AddNewData /> }/>
          <Route path= "/search" element={<SearchStudents /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
