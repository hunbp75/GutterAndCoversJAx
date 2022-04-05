import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/" id="navbutton">
        Home
      </Link>
      <Link to="/Products" id="navbutton">
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
