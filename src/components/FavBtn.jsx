import React from "react";
import { Link } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "../components/styleComp/FavBtn.css";

const FavBtn = () => {
  return (
    <Link to="/favPage">
      <div className="FavBtn">
        <BookmarkIcon className="FavBtn__icon" />
      </div>
    </Link>
  );
};

export default FavBtn;
