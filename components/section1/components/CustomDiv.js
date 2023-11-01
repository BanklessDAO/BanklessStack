import React from "react";
//import "./div.css"

export default function CustomDiv(props) {
  const divStyle = {
    display: "grid",
    minHeight: "80px",
    placeItems: "center",
    backgroundImage: `url(${props.url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "100% 100%",
  };

  const captionStyle = {
    fontFamily: "sans-serif",
    paddingTop: "1.2em",
    textAlign: "center",
    fontSize: "0.9em,",
    letterSpacing: "1px",
  }

  return (
    <div style={divStyle} className="custom-div">
      <h4>{props.heading}</h4>
      <p style={captionStyle}>{props.caption}</p>
    </div>
  );
}
