import React, { useEffect } from "react";
import "../styles/HomePage.css";
import img1 from "../image/img3.webp";
import img2 from "../image/img5.jpeg";
import menu from "../image/Menu.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "react-awesome-slider/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div id="HomePage">
        <div className="HomePage_header">
          <h1
            className="HomePage__header_h1"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            ERNEST <br /> GERASIM
          </h1>
          <p className="HomePage__header_p">
            <span className="HomePage_ernest">ERNEST</span> - This is alcohol
            shop from Niggeriy! Our store takes care of its customers and staff.
            We sell only quality alcohol!{" "}
          </p>
        </div>
      </div>
      <div id="HomePage2">
        <img src={img1} alt="" className="HomePage2__img" />
        <div className="HomePage2__text">
          <h2 className="HomePage2__text_h2">What is Alcohole?</h2>
          <p className="HomePage2__text_p">
            Alcohol is a psychoactive drug that has been consumed in drinks for
            most of human history. In chemistry, the term alcohol refers to a
            whole class of organic compounds that include a hydroxyl group –
            consisting of an oxygen atom and a hydrogen atom – bonded to a
            carbon atom. In common parlance, however, the word alcohol usually
            refers to a specific chemical with the formula C2H5OH, which
            chemists call ethanol.
          </p>
        </div>
      </div>
      <div id="HomePage3">
        <div className="HomePage__opacity">
          <div className="HomePage3__info">
            <h3 className="HomePage3__info_h3">
              Would you like to see our range?
            </h3>
            <p className="HomePage3__info_p">
              We have more than 150 different types of alcoholic beverages in
              our store. If you don't know their names, check out our menu!
            </p>
            <button className="HomePage3__info_btn" onClick={handleOpen}>
              MENU
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  src={menu}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Modal>
          </div>
          <img src={img2} alt="" className="HomePage3__img" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
