import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/contactUs/ContactUs";
import Faqs from "./pages/faqs/Faqs";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/homePage/Home";
import Products from "./pages/productsPage/Products";

import "./App.css";

const Layout = () => (
  <div className="main-container">
    <div className="logo-container">
      <div className="logo-box">
        <img
          src="http://www.guttersandcoversjax.com/Gutters&CoversLLC002.jpg"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="header-container">
        <h3>Gutters And Covers LLC.</h3>
        <h3>Jacksonville, Florida</h3>
        <div className="phone-logo">
          <span className="material-icons" id="call">
            call
          </span>
          <h3>(904) 997-6685</h3>
        </div>
      </div>
    </div>
    <NavBar />
    <Main>
      <Outlet />
    </Main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
