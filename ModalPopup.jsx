import { useRef, useState } from "react";

function ModalPopup() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  function handleModalPopup() {
    setShowPopUp(true);
    setBackgroundColor("green");
    setIsButtonVisible(false);
  }

  function clearModalPopup() {
    setShowPopUp(false);
    setBackgroundColor("");
    setIsButtonVisible(true);
  }

  return (
    <div className="green-color" style={{ backgroundColor: backgroundColor }}>
      <div className="text-center">
        {isButtonVisible && (
          <button onClick={handleModalPopup}>Open Modal Popup</button>
        )}
      </div>
      {showPopUp && (
        <div className="conten-container">
          <div className="content">
            <div className="header">
              <h1>Customized Header</h1>
              <span onClick={clearModalPopup}>X</span>
            </div>
            <p>Customized body</p>
            <footer>Customized Fotter</footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPopup;
