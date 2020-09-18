import React from "react";
import Bg2 from "../images/Bg 2.1.png";
import Bg from "../images/Bg.png";
import Obj from "../images/object 1.png";
import Btn1 from "../images/button_main.png";
import Btn2 from "../images/button_secndry.png";

function Second() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
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
        src={Bg2}
        style={{
          position: "relative",
          top: "0",
          left: "100",
        }}
      />
      <img
        src={Obj}
        style={{
          position: "absolute",
          top: "60px",
          left: "120px",
        }}
      />
      <text
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          position: "absolute",
          top: "300px",
          left: "30px",
        }}
      >
        Hurry!!!
      </text>
      <text
        style={{
          fontSize: "30px",
          position: "absolute",
          top: "350px",
          left: "30px",
        }}
      >
        <i>Hunger Don't Wait</i>
      </text>
      <div>
        <img
          src={Btn1}
          style={{ position: "absolute", top: "600px", left: "30px" }}
        />
        <text
          style={{
            position: "absolute",
            top: "600px",
            left: "140px",
            color: "white",
            fontSize: "20px",

            fontFamily: "initial",
            textSizeAdjust: "inherit",
          }}
        >
          GET STARTED
        </text>

        <text
          style={{
            position: "absolute",
            top: "620px",
            left: "120px",
            color: "black",
            fontSize: "10px",

            textSizeAdjust: "inherit",
          }}
        >
          Available Best Offers & Disscounts For You
        </text>
        <img
          src={Btn2}
          style={{ position: "absolute", top: "670px", left: "30px" }}
        />
        <text
          style={{
            position: "absolute",
            top: "675px",
            left: "100px",
            color: "black",
            fontFamily: "initial",
            fontSize: "20px",
          }}
        >
          Continue Without Login
        </text>

        <img
          src={Btn2}
          style={{ position: "absolute", top: "730px", left: "30px" }}
        />
        <text
          style={{
            position: "absolute",
            top: "730px",
            left: "70px",
            color: "black",
            fontSize: "20px",
            fontFamily: "initial",

            textSizeAdjust: "inherit",
          }}
        >
          Alredy A Tiffia Member?
          <text
            style={{ color: "orange", fontSize: "20px", fontWeight: "bold" }}
          >
            Login
          </text>
        </text>
      </div>
    </div>
  );
}
export default Second;
