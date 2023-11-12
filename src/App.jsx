import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";


import ContactScreen from "./pages/ContactScreen"
import GalleryScreen from "./pages/GalleryScreen"
import LoginScreen from "./pages/LoginScreen"
import HotelScreen from "./pages/HotelScreen"
import RegScreen from "./pages/RegScreen"

// import AboutScreen from "./pages/AboutScreen";


import Error404 from "./components/Error404";


function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);
  };
  return (
    <div className={modoOscuro ? "bg-secondary" : ""}>
      <BrowserRouter>
        <NavBar modoOscuro={modoOscuro} cambiarModo={cambiarModo} />
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen modoOscuro={modoOscuro} cambiarModo={cambiarModo} />
            }
          />

          {/* <Route path="/about" element={<AboutScreen />} /> */}

          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/login" element={<LoginScreen />} />

          <Route path="/register" element={<RegScreen/>} />

          <Route path="*" element={<Error404 />} />

        </Routes>
        <Footer modoOscuro={modoOscuro} cambiarModo={cambiarModo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
