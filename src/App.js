import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";
import Feedback from "./pages/Feedback";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Products from "./pages/Products";

const Layout = () => (
  <div>
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
