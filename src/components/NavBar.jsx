import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Products">Products</Link>
      <Link to="/Gallery">Gallery</Link>
      <Link to="/ContactUs">Contact Us</Link>
      <Link to="/Feedback">FeedBack</Link>
      <Link to="/Faqs">Faq's</Link>
    </nav>
  );
};

export default NavBar;
