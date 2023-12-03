import { useState, useEffect } from "react";
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
import AdminPageScreen from "./pages/AdminPageScreen";
import AdminProtectedRoutes from "./router/AdminprotectedRoutes";
import AdminUsuarioScreen from "./pages/AdminUsuarioScreen";
import AdminHabitacionesScreen from "./pages/AdminHabitacionesScreen";
import AdminReservasScreen from "./pages/AdminReservasScreen";

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

  useEffect(() => {
    document.body.classList.remove("app-mode-dark", "app-mode-light");
    document.body.classList.add(`app-mode-${modoOscuro ? "dark" : "light"}`);
  }, [modoOscuro]);

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
            path="/admin/usuarios"
            element={
              <AdminProtectedRoutes usuario={usuario}>
                <AdminUsuarioScreen usuario={usuario} modoOscuro={modoOscuro} />
              </AdminProtectedRoutes>
            }
          />
          <Route
            path="/admin/habitaciones"
            element={
              <AdminProtectedRoutes usuario={usuario}>
                <AdminHabitacionesScreen usuario={usuario} />
              </AdminProtectedRoutes>
            }
          />
          <Route
            path="/admin/reservas"
            element={
              <AdminProtectedRoutes usuario={usuario}>
                <AdminReservasScreen usuario={usuario} />
              </AdminProtectedRoutes>
            }
          />
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
            element={
              <ContactScreen
                modoOscuro={modoOscuro}
                cambiarModo={cambiarModo}
                usuario={usuario}
              />
            }
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
