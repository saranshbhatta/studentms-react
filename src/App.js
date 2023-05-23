import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Database from "./pages/Database";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home /> }/>
          <Route path= "/database" element={<Database /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
