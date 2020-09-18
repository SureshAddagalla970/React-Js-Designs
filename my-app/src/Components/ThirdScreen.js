import React from "react";

import Bg from "../images/Bg.png";
import Bg3 from "../images/Bg 2.2.png";
import Obj2 from "../images/object 2.png";
import FB from "../images/icon _fb.png";
import MB from "../images/icon _mobile.png";
import ML from "../images/icon _mail.png";
import GL from "../images/icon _google.png";

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
        src={Bg3}
        style={{
          position: "relative",
          top: "0",
          left: "100",
        }}
      />
      <img
        src={Obj2}
        style={{
          position: "absolute",
          top: "60px",
          left: "120px",
        }}
      />
      <text
        style={{
          fontWeight: "bold",
          fontSize: "25px",
          position: "absolute",
          top: "450px",
          left: "30px",
        }}
      >
        LOGIN
      </text>

      <div>
        <img
          src={Btn2}
          style={{ position: "absolute", top: "500px", left: "30px" }}
        />

        <text
          style={{
            position: "absolute",
            top: "506px",
            left: "80px",
            fontSize: "20",
          }}
        >
          Enter Your Mobile Number
        </text>

        <img
          src={MB}
          style={{
            position: "absolute",
            top: "504px",
            left: "37px",
            width: "30px",
            height: "30px",
          }}
        />

        <img
          src={Btn2}
          style={{ position: "absolute", top: "560px", left: "30px" }}
        />
        <text
          style={{
            position: "absolute",
            top: "566px",
            left: "80px",
            fontSize: "20",
          }}
        >
          Continue with FaceBook
        </text>

        <img
          src={FB}
          style={{
            position: "absolute",
            top: "563px",
            left: "37px",
            width: "30px",
            height: "30px",
          }}
        />

        <img
          src={Btn2}
          style={{ position: "absolute", top: "620px", left: "30px" }}
        />
        <text
          style={{
            position: "absolute",
            top: "626px",
            left: "80px",
            fontSize: "20",
          }}
        >
          Continue with Google
        </text>
        <img
          src={GL}
          style={{
            position: "absolute",
            top: "623px",
            left: "37px",
            width: "30px",
            height: "30px",
          }}
        />

        <img
          src={Btn2}
          style={{ position: "absolute", top: "680px", left: "30px" }}
        />
        <text
          style={{
            position: "absolute",
            top: "686px",
            left: "80px",
            fontSize: "20",
          }}
        >
          Continue with Email
        </text>

        <img
          src={ML}
          style={{
            position: "absolute",
            top: "683px",
            left: "37px",
            width: "30px",
            height: "30px",
          }}
        />
      </div>
      <text
        style={{
          position: "absolute",
          top: "750px",
          left: "60px",
          textSizeAdjust: "80%",
        }}
      >
        By Continuing,You Agree <span>To Our</span> <br />
        <text style={{ textDecoration: "underline", textSizeAdjust: "80%" }}>
          Terms of Service{" "}
        </text>
        &
        <text style={{ textDecoration: "underline", textSizeAdjust: "80%" }}>
          Privacy Policy
        </text>
      </text>
    </div>
  );
}
export default Second;
