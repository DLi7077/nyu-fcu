import React from "react";
import "./styles.css";

export default function Layout(props) {
  return (
    <>
      {props.img && (
        <div className="img-container">
          {props.img}
          {props.img_content}
        </div>
      )}
      <div className="content" style={props.img ? { marginTop: "-100vh" } : {}}>
        <div className="content-body">
          {props.content}
        </div>
      </div>
    </>
  );
}
