import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon2 from "../icons/tiktok.png";
import "../styles/Footer.css";
const Footer = () => {
  const position = [42.82881661578283, 74.58419582287019];
  return (
    <div id="footer">
      <h3 className="footer__text_h3">ERNEST</h3>

      <h4 className="footer__h4">Следите за нами в соц сетях</h4>

      <div
        className="footer__icon"
        style={{
          width: "30%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <InstagramIcon style={{ color: "white", fontSize: "2rem" }} />
        <TelegramIcon style={{ color: "white", fontSize: "2rem" }} />
        <WhatsAppIcon style={{ color: "white", fontSize: "2rem" }} />
        <img src={icon2} alt="picture" style={{ width: "2rem" }} />
      </div>
      <div className="footer__map" style={{ width: "100%" }}>
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ margin: "0 auto", marginTop: "50px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[42.82881661578283, 74.58419582287019]}>
            <Popup>
              Michelle <br />
              Лучшая кофейня <br />
              <a href="https://2gis.kg/bishkek/firm/70000001047006378/74.584363%2C42.828519?m=74.583745%2C42.82865%2F15.8">
                2-GIS
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Footer;
