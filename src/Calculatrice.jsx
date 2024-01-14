import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";
import { faDivide } from "@fortawesome/free-solid-svg-icons";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { evaluate, sqrt } from "mathjs";

const Calculatrice = () => {
  const [clicked, setClicked] = useState("");

  const handleButtonClicked = (buttonValue) => {
    if (buttonValue === "=") {
      try {
        setClicked(evaluate(clicked));
      } catch (error) {
        setClicked("error");
      }
    } else if (buttonValue === "C") {
      setClicked("");
    } else if (buttonValue === "x") {
      setClicked((prevValue) => prevValue + "*");
    } else if (buttonValue === "x^2") {
      setClicked((prevValue) => prevValue + "^2");
    } else if (buttonValue === "efface") {
      setClicked((prevValue) => prevValue.slice(0, -1));
    } else {
      setClicked((prevValue) => prevValue + buttonValue);
    }
  };

  return (
    <div>
      <Button touche={clicked} classe="ecran" />

      <div className="colones">
        <div className="ligne">
          <Button touche={"PI"} onClick={() => handleButtonClicked("3.14")} />
          <Button touche={"("} onClick={handleButtonClicked} />
          <Button touche={")"} onClick={handleButtonClicked} />
          <Button
            classe="efface"
            touche={<FontAwesomeIcon icon={faBackspace} />}
            onClick={() => handleButtonClicked("efface")}
          />
          <Button touche={"C"} onClick={handleButtonClicked} />
        </div>
        <div className="ligne">
          <Button touche="7" onClick={handleButtonClicked} />
          <Button touche={"8"} onClick={handleButtonClicked} />
          <Button touche={"9"} onClick={handleButtonClicked} />
          <Button
            touche={<FontAwesomeIcon icon={faDivide} />}
            onClick={() => handleButtonClicked("/")}
          />
          <Button
            touche={<FontAwesomeIcon icon={faSquareRootVariable} />}
            onClick={() => handleButtonClicked("sqrt(")}
          />
        </div>
        <div className="ligne">
          <Button touche={"4"} onClick={handleButtonClicked} />
          <Button touche={"5"} onClick={handleButtonClicked} />
          <Button touche={"6"} onClick={handleButtonClicked} />
          <Button touche={"x"} onClick={handleButtonClicked} />
          <Button touche={"x^2"} onClick={handleButtonClicked} />
        </div>
      </div>

      <div className="ligne-avec-egale">
        <div className="ligne-sans-egale">
          <div className="ligne">
            <Button touche={"1"} onClick={handleButtonClicked} />
            <Button touche={"2"} onClick={handleButtonClicked} />
            <Button touche={"3"} onClick={handleButtonClicked} />
            <Button touche={"-"} onClick={handleButtonClicked} />
          </div>

          <div className="ligne">
            <Button touche={"0"} onClick={handleButtonClicked} />
            <Button touche={"."} onClick={handleButtonClicked} />
            <Button touche={"%"} onClick={handleButtonClicked} />
            <Button touche={"+"} onClick={handleButtonClicked} />
          </div>
        </div>
        <Button classe="egale" touche={"="} onClick={handleButtonClicked} />
      </div>
    </div>
  );
};

export default Calculatrice;
