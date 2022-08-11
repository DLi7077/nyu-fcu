import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Tab,
  Tabs,
  TableRow,
  TableCell,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LoansTable from "./LoansTable";
import SavingsTable from "./SavingsTable";
import CreditCardTable from "./CreditCardTable";
import "../styles.css";

const tableMapping = [<LoansTable />, <SavingsTable />, <CreditCardTable />];

/**
 * @description Collapsible row containing rates details
 * @param {Object} props - An Object containing rates info
 * @returns {ReactComponent} a Collapsible Row
 */
export default function Rates(props) {
  const [open, setOpen] = useState(true);
  const [idx, setIdx] = useState(0);

  const tabStyle = { color: "purple", fontSize: "1.5rem" };
  const handleIdxChange = (event, newValue) => {
    setIdx(newValue);
  };

  return (
    <>
      <TableRow className="row">
        <TableCell style={{ width: "10%", padding: 0 }}>
          <div className="button-cell">
            <div
              id="rates"
              style={{
                position: "relative",
                top: "-80px",
                width: 0,
                height: 0,
                padding: 0,
                margin: 0,
                display: "none",
              }}
            />
            <img src={props.rates.icon} className="cell-icon" alt="icon" />
            <IconButton
              aria-label="expand row"
              size="large"
              style={{ padding: 0, width: "40px", height: "40px" }}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <KeyboardArrowDownIcon sx={props.arrow} />
              ) : (
                <KeyboardArrowRightIcon sx={props.arrow} />
              )}
            </IconButton>
          </div>
        </TableCell>
        <TableCell>
          <div className="row-title">{props.rates.title}</div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "5vw",
                paddingBottom: "2rem",
              }}
            >
              {props.rates.content.map((c, idx) => {
                return (
                  <div key={idx} style={{ padding: "1rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.5rem" }}>
                      {c.subtitle}
                    </div>
                    <div style={props.text}>{c.description}</div>

                    <a
                      href={c.redirect.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        style={{
                          backgroundColor: "#CC11DC",
                          width: "15rem",
                          height: "3rem",
                          border: 0,
                          borderRadius: 0,
                          color: "white",
                          fontSize: "1.5rem",
                          fontWeight: 300,
                          textTransform: "capitalize",
                          marginTop: "0.5rem",
                        }}
                      >
                        {c.redirect.label}
                      </Button>
                    </a>
                  </div>
                );
              })}
              <Tabs variant="scrollable" value={idx} onChange={handleIdxChange}>
                <Tab label="Loans" sx={tabStyle} />
                <Tab label="Savings" sx={tabStyle} />
                <Tab label="Credit Card" sx={tabStyle} />
              </Tabs>
              <div>{tableMapping[idx]}</div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
