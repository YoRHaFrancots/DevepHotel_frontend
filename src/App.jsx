import NavBar from "./components/NavBar";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import GalleryScreen from "./pages/GalleryScreen";
import LoginScreen from "./pages/LoginScreen";
import HotelScreen from "./pages/HotelScreen";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/hotel" element={<HotelScreen />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
