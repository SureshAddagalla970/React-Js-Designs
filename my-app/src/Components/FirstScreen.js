import React from "react";
import { Link } from "react-router-dom";

import Bg from "../images/Bg.png";
import Tiff from "../images/Tiffinia_icon_small.png";

import Btn2 from "../images/button_secndry.png";
import Obj from "../images/object 1.png";

function Second() {
  return (
    <div>
      <img
        src={Bg}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          display: "flex",
        }}
      />
      <img
        src={Tiff}
        style={{
          position: "absolute",
          top: "300px",
          left: "100px",
          width: "200px",
          height: "200px",
        }}
      />
    </div>
  );
}
export default Second;
