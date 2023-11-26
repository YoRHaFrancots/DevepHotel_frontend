import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ContactScreen from "./pages/ContactScreen";
import GalleryScreen from "./pages/GalleryScreen";
import LoginScreen from "./pages/LoginScreen";
import HotelScreen from "./pages/HotelScreen";
import RegScreen from "./pages/RegScreen";
import ProtectedRoutes from "./router/ProtectedRoutes";
import AdminScreen from "./pages/AdminScreen";
import RouterPrimary from "./router/RouterPrimary";
import AdminPageScreen from "./pages/AdminPageScreen";

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [login, setLogin] = useState(false);

  const saveUser = (data) => {
    setUsuario(data);
  };

  const loginUser = () => {
    setLogin(true);
  };

  const logoutUser = () => {
    setLogin(false);
  };

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);
  };
  return (
    <div className={modoOscuro ? "bg-secondary" : ""}>
      <BrowserRouter>
        <NavBar
          modoOscuro={modoOscuro}
          cambiarModo={cambiarModo}
          usuario={usuario}
          logoutUser={logoutUser}
          login={login}
          setLogin={setLogin}
          setUsuario={setUsuario}
        />
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes login={login}>
                <RouterPrimary usuario={usuario} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/"
            element={
              <HomeScreen
                modoOscuro={modoOscuro}
                cambiarModo={cambiarModo}
                usuario={usuario}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactScreen usuario={usuario} />}
          />
          <Route
            path="/gallery"
            element={<GalleryScreen usuario={usuario} />}
          />
          <Route
            path="/login"
            element={
              <LoginScreen
                modoOscuro={modoOscuro}
                cambiarModo={cambiarModo}
                loginUser={loginUser}
                saveUser={saveUser}
              />
            }
          />
          <Route
            path="/hotel"
            element={
              <HotelScreen
                modoOscuro={modoOscuro}
                cambiarModo={cambiarModo}
                usuario={usuario}
              />
            }
          />
          <Route path="/register" element={<RegScreen />} />
          <Route
            path="/adminPage"
            element={<AdminPageScreen usuario={usuario} />}
          />
          <Route
            path="*"
            element={
              <Error404 modoOscuro={modoOscuro} cambiarModo={cambiarModo} />
            }
          />
        </Routes>
        <Footer modoOscuro={modoOscuro} cambiarModo={cambiarModo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
