import React from "react";
import imgEntornoCampo from "../assets/imgs/imgEntornoCampo.jpg";
import imgPueblo from "../assets/imgs/imgPueblo.jpg";
import imgVistaVentana from "../assets/imgs/imgVistaVentana.avif";
import imgHorreoAsturias from "../assets/imgs/imgHorreoAsturias.jpg";
import imgOrdenadorEnBosque from "../assets/imgs/imgOrdenadorEnBosque.jpg";

const HotelScreen = ({ modoOscuro, usuario }) => {
  return (
    <div>
      <div>
        <img
          className="imgPrincipalElHotel"
          src={imgEntornoCampo}
          alt="Imagen de montañas"
        />
        <div className="TextoImgPricipalElHotel">Conoce nuestra historia</div>
      </div>
      <div className="m-3">
        <div
          className={` ${
            modoOscuro ? "card mb-3 mt-4 bg-secondary" : "card mb-3 mt-4 "
          }`}
        >
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img
                src={imgPueblo}
                className="img-fluid rounded-2 imgPueblo"
                alt="Imagen pueblo"
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title">El Sueño Compartido</h5>
                <p
                  className={` ${
                    modoOscuro ? "p_oscuro card-text mt-2" : "card-text mt-2"
                  }`}
                >
                  En las serenas tierras de Asturias, cuatro almas apasionadas
                  decidieron fusionarse para dar vida a un sueño compartido:
                  DevepHotel, un refugio rural que combina la rica tradición de
                  Asturias con la innovación del mundo digital. Roxana,
                  arraigada a las tradiciones; Franco, enamorado de las
                  montañas; Alejandra, la artista de cada rincón; y Laura,
                  guardiana de historias y conexiones con el pasado. <br />{" "}
                  <br /> Juntos, estos amigos de toda la vida emprendieron la
                  emocionante aventura de construir un refugio acogedor donde
                  los visitantes pueden sumergirse en la autenticidad y la
                  belleza de Asturias, al tiempo que exploran las maravillas del
                  desarrollo web. Cada uno aportó sus habilidades únicas y su
                  amor inquebrantable por la región, fusionando la tradición con
                  la modernidad y creando un rincón especial: DevepHotel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${
            modoOscuro ? "card mb-3 mt-4 bg-secondary" : "card mb-3 mt-4 "
          }`}
        >
          <div className="row g-0">
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title">La visionaria y el intrépido</h5>
                <p
                  className={` ${
                    modoOscuro ? "p_oscuro card-text mt-2" : "card-text mt-2"
                  }`}
                >
                  Roxana, la visionaria, trajo consigo las costumbres y sabores
                  de generaciones pasadas, asegurándose de que cada rincón del
                  hotel resonara con la esencia de Asturias. Franco, el
                  intrépido, exploró las montañas para inspirar el diseño del
                  hotel y garantizar que cada ventana ofreciera vistas
                  impresionantes de los paisajes que amaba.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex d-flex align-items-center justify-content-center">
              <img
                src={imgVistaVentana}
                className="img-fluid rounded-2 imgPueblo"
                alt="Imagen ventana con vistas"
              />
            </div>
          </div>
        </div>
        <div
          className={` ${
            modoOscuro ? "card mb-3 mt-4 bg-secondary" : "card mb-3 mt-4 "
          }`}
        >
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img
                src={imgHorreoAsturias}
                className="img-fluid rounded-2 imgPueblo"
                alt="Imagen hórreo asturiano"
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title">La artista y la cuentacuentos</h5>
                <p
                  className={` ${
                    modoOscuro ? "p_oscuro card-text mt-2" : "card-text mt-2"
                  }`}
                >
                  Alejandra, la artista sensible, transformó cada pared en una
                  obra maestra que contaba la historia de Asturias con colores y
                  formas. Su creatividad fluía en cada habitación, dando vida a
                  la riqueza cultural de la región. Mientras tanto, Laura, la
                  historiadora y cuentacuentos, recopiló las historias locales y
                  tradiciones, compartiéndolas con los huéspedes en cenas
                  alrededor de la chimenea.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${
            modoOscuro ? "card mb-3 mt-4 bg-secondary" : "card mb-3 mt-4 "
          }`}
        >
          <div className="row g-0">
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body mb-4">
                <h5 className="card-title">DevepHotel, el Testimonio Vivo</h5>
                <p
                  className={` ${
                    modoOscuro ? "p_oscuro card-text mt-2" : "card-text mt-2"
                  }`}
                >
                  DevepHotel se convirtió en un testimonio vivo del amor y la
                  dedicación de estos cuatro amigos por su tierra. Cada rincón
                  del hotel cuenta la historia de su amistad, sus risas
                  compartidas y sus noches planeando un futuro que ahora se
                  materializa en cada sonrisa de los huéspedes. Aquí, en este
                  tejido de amistad y pasión por Asturias, los visitantes pueden
                  no solo disfrutar de la naturaleza circundante, sino también
                  sumergirse en el mundo del desarrollo web, llevando a cabo
                  reuniones y conferencias que reflejan la esencia tecnológica
                  que impulsa a los fundadores de DevepHotel.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center ">
              <img
                src={imgOrdenadorEnBosque}
                className="img-fluid rounded-2 imgPueblo"
                alt="Imagen odenador antiguo en bosque"
              />
            </div>
          </div>
        </div>
      </div>
      <div >‎ </div>
      <div >‎ </div>
    </div>
  );
};

export default HotelScreen;
