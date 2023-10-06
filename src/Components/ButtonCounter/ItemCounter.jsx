import React, { useState } from "react";
import style from "./item-counter.module.css";

const ButtonCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleRestar = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const handleSumar = () => {
    setCounter(counter + 1);
  };

  const handleQuitar = () => {
    setCounter(0);
  };

  return (
    <div>
      <div className={style["container-counter"]}>
        <button className={style.boton} onClick={handleRestar}>
          -
        </button>
        <p className={style.counter}>{counter}</p>
        <button className={style.boton} onClick={handleSumar}>
          +
        </button>
      </div>
      {counter !== 0 && (
        <button
          className={`${style.quitar} ${style.appear}`}
          onClick={handleQuitar}
        >
          QUITAR
        </button>
      )}
    </div>
  );
};

export default ButtonCounter;
