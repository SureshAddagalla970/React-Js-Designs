import React from "react";

import Bg from "../images/Bg.png";
import Bg3 from "../images/Bg 2.3.png";
import Obj3 from "../images/object 3.png";
import Btn1 from "../images/button_main.png";
import Btn2 from "../images/button_secndry.png";
function Second() {
  return (
    <div style={{ width: "100%", height: "200%" }}>
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
        src={Obj3}
        style={{
          position: "absolute",
          top: "100px",
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
      <text
        style={{
          fontSize: "10px",
          position: "absolute",
          top: "490px",
          left: "33px",
        }}
      >
        {" "}
        Enter Your Mobile Number
      </text>
      <img
        src={Btn2}
        style={{ position: "absolute", top: "505px", left: "30px" }}
      />
      <text
        style={{
          position: "absolute",
          top: "510px",
          left: "43px",
        }}
      >
        +91|9876543210
      </text>
      <text
        style={{
          fontWeight: "bold",
          fontSize: "25px",
          position: "absolute",
          top: "600px",
          left: "30px",
        }}
      >
        VERIFY OTP
      </text>
      <text
        style={{
          fontSize: "10px",
          position: "absolute",
          top: "640px",
          left: "33px",
        }}
      >
        {" "}
        OTP Sent to 9876543210
      </text>
      <img
        src={Btn2}
        style={{ position: "absolute", top: "653px", left: "30px" }}
      />
      <text
        style={{
          fontWeight: "bold",
          position: "absolute",
          top: "647px",
          left: "50px",
          fontSize: "30px",
        }}
      >
        __ __ __ __ __ __
      </text>
      <text
        style={{
          position: "absolute",
          top: "647px",
          left: "50px",
          fontSize: "30px",
        }}
      >
        &nbsp;5 &nbsp;5 &nbsp;5 &nbsp;5 &nbsp;5 &nbsp;5
      </text>
      <text
        style={{
          position: "absolute",
          top: "693px",
          left: "30px",
          fontSize: "10px",
          color: "orange",
        }}
      >
        ChangeMobileNumber
      </text>
      <text
        style={{
          position: "absolute",
          top: "693px",
          left: "220px",
          fontSize: "10px",
        }}
      >
        Auto Detect in 00:00 <text style={{ color: "orange" }}>RESEND</text>
      </text>
      <img
        src={Btn1}
        style={{ position: "absolute", top: "750px", left: "30px" }}
      />
      <text
        style={{
          position: "absolute",
          top: "750px",
          left: "140px",
          color: "white",

          fontSize: "20px",
        }}
      >
        PROCEED
      </text>
    </div>
  );
}
export default Second;
