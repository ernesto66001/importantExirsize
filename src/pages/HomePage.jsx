import React from "react";
import "../styles/HomePage.css";
import img1 from "../image/img2.jpeg";
import img2 from "../image/img3.webp";
import img3 from "../image/img4.webp";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const HomePage = () => {
  return (
    <div id="HomePage">
      <div className="HomePage__mainBlock">
        <div className="HomePage__Slider">
          <AwesomeSlider className="HomePage__Slider_block">
            <div data-src={img1}>1</div>
            <div data-src={img2}>2</div>
            <div data-src={img3}>3</div>
          </AwesomeSlider>
        </div>
        <div className="HomePage__Info">
          <div className="HomePage__Info_Name">
            <h1 className="HomePage__Info_NameH1">ERNEST</h1>
            <p className="HomePage__Info_NameP">Alcohol store</p>
          </div>
          <div className="HomePage__Info_Text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              deserunt tempore laborum nemo explicabo esse quos dolor minima
              aliquam atque, unde quasi dolorem aspernatur reprehenderit animi
              veritatis temporibus culpa neque.
            </p>
          </div>
          <button className="HomePage__Info_Btn">Buy Now</button>
        </div>
        <div className="HomePage__Line_Left"></div>
        <div className="HomePage__Line_Right"></div>
      </div>
    </div>
  );
};

export default HomePage;
