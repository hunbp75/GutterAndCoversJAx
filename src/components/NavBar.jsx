import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/GutterAndCoversJAx/" id="navbutton">
        Home
      </Link>
      <Link to="/GutterAndCoversJAx/Products" id="navbutton">
        Products
      </Link>
      <Link to="/GutterAndCoversJAx/Gallery" id="navbutton">
        Gallery
      </Link>
      <Link to="/GutterAndCoversJAx/ContactUs" id="navbutton">
        Contact Us
      </Link>
      <Link to="/GutterAndCoversJAx/Faqs" id="navbutton">
        Faq's
      </Link>
    </nav>
  );
};

export default NavBar;
