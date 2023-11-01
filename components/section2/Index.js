"use client";
import React, { useState } from "react";
import backgroundA from "../../public/img/vec1.png";
import backgroundB from "../../public/img/Vector 11.png";
import backgroundAhover from "../../public/img/vec10Hover.png";
import backgroundBhover from "../../public/img/vec11Hover.png";
import eclipse from "../../public/img/Ellipse 34.png";
// import { url } from "inspector";
const Index = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredDiv2, setIsHoveredDiv2] = useState(false);
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#090808",
        display: "grid",
        gridGap: "10px",
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundImage: `url(${backgroundA})`,
          // backgroundImage: isHovered ? `url(${imageAH})` : `url(${imageA})`,
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "relative",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-white z-1">MISSION</h1>
        <p className="text-white z-1">
          Help our members grow and build crypto products aligned with
          BanklessDAO's values
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          color: "white",
          right: "0",
          top: "10%",
        }}
      >
        <img
          src={eclipse}
          // src="../../public/img/vec1.png"
          alt=""
          style={{
            height: "499px",
            width: "499px",
          }}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundB})`,
          textAlign: "center",
          // backgroundImage: isHoveredDiv2 ? `url(${imageBH})` : `url(${imageB})`,
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "relative",
        }}
        onMouseEnter={() => setIsHoveredDiv2(true)}
        onMouseLeave={() => setIsHoveredDiv2(false)}
      >
        <h1 className="text-white z-1">VISION</h1>
        <p className="text-white z-1">
          To enable BanklessDAO's technical endeavors through developer and
          technical talent
        </p>
      </div>
    </div>
  );
};

export default Index;
