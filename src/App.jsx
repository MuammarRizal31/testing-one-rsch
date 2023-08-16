import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbars/Navbar-component";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Carrer from "./pages/Carrer";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import NewsPage from "./pages/NewsPage";
import ProductPage from "./pages/ProductPage";
import Csr from "./pages/CSR";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/carrer" Component={Carrer} />
        <Route path="/contact-us" Component={ContactUs} />
        <Route path="/faq" Component={Faq} />
        <Route path="/news-article" Component={NewsPage} />
        <Route path="/products" Component={ProductPage} />
        <Route path="/csr" Component={Csr} />
      </Routes>
      <h1>Hello page</h1>
    </>
  );
};

export default App;
