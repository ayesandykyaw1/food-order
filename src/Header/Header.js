import Brand from "./Brand";
import classes from "./Header.module.css";
import SearchInput from "./SearchInput";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Header = (props) => {
  const newItemHandler = () => {
    props.onTrueOverlay(true);
  };
  return (
    <header className={classes.header}>
      <Brand />
      <SearchInput />
      <Button
        className={`${classes.btn} ${classes["newItem-btn"]}`}
        onClick={newItemHandler}
      >
        New Item
      </Button>
      {/* <button className="btn newItem-btn">New Item</button> */}
      <Card className={classes.profile}>
        <a href="#">
          <img
            src="./img/profile.jpg"
            alt="Seller Profile"
            className={classes["profile-img"]}
          />
        </a>
      </Card>
    </header>
  );
};
export default Header;
