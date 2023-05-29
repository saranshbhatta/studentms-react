import "./Navbar.css";
import logo from "../images/logo.jpg";

const Navbar = ({ title = "Homeeee" }) => {
  return (
    <>
      <div className="navbar_container">
        <div className="listContainer">
          <ul>
            <a href="/">
              <img src={logo} className="logoImg" alt="logo" />
            </a>
            <a href="/">
              <li>{title}</li>
            </a>
            <a href="/database">
              <li>Database</li>
            </a>
            <a href="/search">
              <li>Search Students</li>
            </a>
            <a href="/contacts">
              <li>Contacts</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
