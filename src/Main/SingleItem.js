import classes from "./SingleItem.module.css";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const SingleItem = (props) => {
  const cartItemHandler = () => {
    const cartItem = {
      itemId: props.itemId,
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      count: 1,
    };
    props.onGetCartItemData(cartItem);
  };
  return (
    <Card className={classes["left-section-item"]}>
      <div className={classes.item} key={props.itemId}>
        <ul>
          <li>{props.itemName}</li>

          <li>- {props.itemPrice} MMK</li>
          <li onClick={cartItemHandler}>
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default SingleItem;
