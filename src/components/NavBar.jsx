import { Link } from "react-router-dom";
import "./navBar.css";
import YouAreHere from "./YouAreHere";

const NavBar = () => {
  const handleClick = () => {
    return <h1>jodjeop</h1>;
  };

  return (
    <nav className="navBar">
      <Link to="/" id="navbutton">
        Home
      </Link>
      <Link to="/Products" id="navbutton" onClick={handleClick}>
        Products
      </Link>
      <Link to="/Gallery" id="navbutton">
        Gallery
      </Link>
      <Link to="/ContactUs" id="navbutton">
        Contact Us
      </Link>
      <Link to="/Faqs" id="navbutton">
        Faq's
      </Link>
    </nav>
  );
};

export default NavBar;
