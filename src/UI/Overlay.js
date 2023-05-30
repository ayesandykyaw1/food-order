import classes from "./Overlay.module.css";
// importance not change div to Card
const Overlay = (props) => {
  const removeOverlayHandler = () => {
    props.onFalseOverlay(false);
  };
  return (
    <div className={classes["back-drop"]} onClick={removeOverlayHandler}></div>
  );
};
export default Overlay;
