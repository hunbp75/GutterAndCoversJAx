import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/contactUs/ContactUs";
import Faqs from "./pages/faqs/Faqs";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/homePage/Home";
import Products from "./pages/productsPage/Products";

import "./App.css";
import Weather from "./components/Weather";

const Layout = () => (
  <div className="main-container">
    <div className="logo-container">
      <div className="header-container">
        <h3> Jacksonville, Fl. &#160;</h3>
        <h3>Gutters And Covers LLC. &#160;&#160;</h3>
        <div className="phone-logo">
          <span className="material-icons" id="calll">
            call
          </span>
          <h3>(904) 997-6685</h3>
        </div>
      </div>
      <div className="logo-box">
        <img src="/Gutters&CoversLLc_USA02.jpg" alt="logo" className="logo" />
      </div>
      <Weather />
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
          <Route path="/Products" element={<Products />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
