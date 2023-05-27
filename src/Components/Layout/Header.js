import React from "react";
import mealsImage from "../asserts/meal.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Omni Food </h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table Full of Delicious Food" />
      </div>
    </React.Fragment>
  );
};
export default Header;
