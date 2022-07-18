import React from "react";
import Overlay from "../../Views/Overlay";
import Menu from "../../Components/CollapseMenu";
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
          <Menu />
          {props.content}
          {/* <Overlay /> */}
        </div>
      </div>
    </>
  );
}
