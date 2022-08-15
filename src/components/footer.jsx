import React from "react";
import "../styles/Footer.css";
import LiquorIcon from "@mui/icons-material/Liquor";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box id="footer">
      <hr className="footer__hr" />
      <LiquorIcon className="footer__icon" />
      <hr className="footer__hr" />
    </Box>
  );
};

export default Footer;
