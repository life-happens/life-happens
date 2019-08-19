import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 400,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
        
      }}
      className="jumbotron font_righteous"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
