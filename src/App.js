import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/contactUs/ContactUs";
import Faqs from "./pages/Faqs";
import Feedback from "./pages/Feedback";
import Gallery from "./pages/Gallery";
import Home from "./pages/homePage/Home";
import Products from "./pages/productsPage/Products";

import "./App.css";

const Layout = () => (
  <div className="main-container">
    <div className="header-container">
      <h1>Gutters And Covers LLC.</h1>
      <h3>Jacksonville, Florida</h3>
      <h4>(904) 997-6685</h4>
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
          <Route path="Feedback" element={<Feedback />} />
          <Route path="Faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
