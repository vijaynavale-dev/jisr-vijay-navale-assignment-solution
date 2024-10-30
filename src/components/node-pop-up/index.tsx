import React, { useEffect, useRef } from "react";

const NodePopUp = ({ nodePopUpDetails, setNodePopUpDetails }) => {
  const popUpRef = useRef();

  const { xPosition, yPosition, nodeData } = nodePopUpDetails ?? {};

  const onOptionClick = (optionName) => {
    console.log("Option name:- ", optionName);
    console.log("File name:- ", nodeData?.name);
  };

  useEffect(() => {
    const removePopUp = (e: React.MouseEvent<HTMLElement>) => {
      if (popUpRef?.current?.contains(e.target)) return;
      setNodePopUpDetails(null);
    };
    document.addEventListener("click", removePopUp);
    return () => {
      document.removeEventListener("click", removePopUp);
    };
  }, [nodePopUpDetails]);

  if (!nodePopUpDetails) {
    return null;
  }

  return (
    <div
      className="popupDetails"
      id="popupDetails"
      style={{ top: yPosition, left: xPosition }}
      ref={popUpRef}
    >
      <span onClick={() => onOptionClick("Copy")}>Copy</span>
      <span onClick={() => onOptionClick("Rename")}>Rename</span>
      <span onClick={() => onOptionClick("Delete")}>Delete</span>
    </div>
  );
};

export default NodePopUp;
