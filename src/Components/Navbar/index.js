import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";
import "./styles.css";
import menuContent from "../../Constants/CollapseMenu";
import icon from "../../Assets/nyu_icon.svg";
import { Button, Drawer, IconButton, Table, TableBody } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CollapsibleRow from "../CollapsibleRow";
import HashRedirect from "../HashRedirect";

export default function Navbar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawer] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="burger">
          <IconButton
            style={{ padding: 0, paddingInline: "0.25rem" }}
            onClick={() => {
              setDrawer(!drawerOpen);
            }}
          >
            <MenuIcon
              style={{ fontSize: "min(5rem,max(4rem,10vw))", color: "white" }}
            />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => {
              setDrawer(false);
            }}
            style={{ maxWidth: "70%" }}
          >
            <div className="drawer">
              <Button
                style={{ width: "100%" }}
                onClick={() => {
                  setDrawer(false);
                }}
              >
                <MenuIcon style={{ fontSize: "5rem", color: "white" }} />
              </Button>
              <Table>
                <TableBody>
                  {menuContent.map((content, idx) => {
                    const label = (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img
                          src={content.icon}
                          className="menu-icon"
                          alt="menu icon"
                        />
                        <div className="menu-title">
                          {get(content, "label")}
                        </div>
                      </div>
                    );
                    const { redirects } = content;
                    const dropdownLinks = (
                      <div className="linkGroup">
                        {redirects.map((page, idx) => {
                          return (
                            <div key={idx} style={{ width: "100%" }}>
                              <HashRedirect
                                to={{
                                  pathname: page.path,
                                  hash: page.hash ?? null,
                                }}
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                onClick={() => {
                                  setDrawer(false);
                                }}
                                content={
                                  <div className="redirect">{page.label}</div>
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    );

                    return (
                      <CollapsibleRow
                        key={idx}
                        arrow_color="white"
                        arrow_position="right"
                        arrow_rem={3}
                        margin_left="0rem"
                        row_color="#841ca1"
                        collapse_color="#9730b4"
                        title={label}
                        content={dropdownLinks}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Drawer>
        </div>

        <div className="wrapper">
          <Button
            onClick={() => {
              navigate("/");
            }}
            className="home-icon"
          >
            <img
              src={icon}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt="nyu logo"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
