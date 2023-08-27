import React from "react";
import style from "./Driver.module.css";
import Drive from "../../images/drive.png";

const Driver = () => {
  return (
    <div className={style.driver}>
      <div className={style.left}>
        <img src={Drive} alt="" />
      </div>
      <div className={style.test}>
        <h2>
          Find your perfect car <span> to try before you buy</span>
        </h2>
        <p>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
