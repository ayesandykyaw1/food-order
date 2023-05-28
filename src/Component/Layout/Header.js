import foodImg from "../../assets/food.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Omni food</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImg} alt="meal photo" />
      </div>
    </>
  );
}

export default Header;
