import Header from "./Header/Header";
import { ReactDOM } from "react";
import Main from "./Main/Main";
import Overlay from "./UI/Overlay";
import Modal from "./Modal/Modal";
import { useState } from "react";
function App() {
  const [overlay, setOverlay] = useState(false);
  const [itemList, setItemList] = useState([]);
  const overlayTrueState = (e) => {
    setOverlay(e);
  };
  const overlayFalseState = (e) => {
    setOverlay(e);
  };
  const allItemHandler = (e) => {
    setItemList((prevItems) => [e, ...prevItems]);
  };
  console.log(itemList);
  return (
    <>
      {overlay
        ? ReactDOM.createPortal(
            <Overlay onFalseOverlay={overlayFalseState} />,
            document.getElementById("overlay")
          )
        : ""}
      {overlay
        ? ReactDOM.createPortal(
            <Modal onGetAllItem={allItemHandler} />,
            document.getElementById("overlay")
          )
        : ""}

      <Header onTrueOverlay={overlayTrueState} />
      <Main itemList={itemList} />
    </>
  );
}
export default App;
// supabase pw-Items-EphffLl5s6QDZ1Em
