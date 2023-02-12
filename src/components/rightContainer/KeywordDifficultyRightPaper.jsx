import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.css";
function KeywordDifficultyRightPaper({ data }) {
  const [intentMap, setIntentMap] = useState({});
  const [onHoverShowTxt, setOnHoverShowTxt] = useState(false);
  console.log(data, "datatat");
  const intentMapFunction = (data) => {
    if (data === 0) {
      setIntentMap({
        type: "Commercial",
        hovertext: "The user wants to investigate brands or services.",
        color: { color: "#A75800", background: "#FCE081" },
      });
    } else if (data === 1) {
      setIntentMap({
        type: "Informational",
        hovertext: "The user wants to find an answer to a specific question.",
        color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
      });
    } else if (data === 2) {
      setIntentMap({
        type: "Navigational",
        hovertext: "The user wants to find a specific page or site.",
        color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
      });
    } else if (data === 3) {
      setIntentMap({
        type: "Transactional",
        hovertext: "The user wants to complete an action (conversion).",
        color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
      });
    }
  };

  useEffect(() => {
    intentMapFunction(Number(data[2]));
  }, [data]);

  const styling = (prop) => {
    return {
      width: "100%",
      height: "100%",

      color: prop.color,
    };
  };

  const handleMouseOver = () => {
    setOnHoverShowTxt(true);
  };

  const handleMouseOut = () => {
    setOnHoverShowTxt(false);
  };
  return (
    <>
      <Grid sx={{ marginTop: "1em", padding: "3em" }} container spacing={2}>
        <Grid item xs={12} md={12}>
          <Paper sx={{ padding: "2em", borderRadius: "10px" }} elevation={3}>
            <Typography sx={{ color: "grey", fontSize: "20px" }}>
              Intent
            </Typography>
            <div
              //   className={styles.styling(intentMap?.color)}
              //   style={intentMap?.color}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className={
                intentMap?.type === "Informational"
                  ? styles.informational
                  : intentMap?.type === "Commercial"
                  ? styles.commercial
                  : intentMap?.type === "Navigational"
                  ? styles.navigational
                  : styles.transac
              }
            >
              {intentMap?.type}
            </div>
            {onHoverShowTxt && <h3>{intentMap?.hovertext}</h3>}
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper sx={{ padding: "2em", borderRadius: "10px" }} elevation={3}>
            <Typography sx={{ color: "grey", fontSize: "20px" }}>
              Results
            </Typography>
            <div style={{ fontWeight: "bold" }}>{data[5] / 1000000}M</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper
            sx={{
              padding: "2em",
              borderRadius: "10px",
              display: "flex",
            }}
            elevation={3}
          >
            <div>
              <Typography sx={{ color: "grey", fontSize: "20px" }}>
                CPC
              </Typography>
              <div style={{ fontWeight: "bold" }}>{data[3]}</div>
            </div>
            <div style={{ marginLeft: "10em" }}>
              <Typography sx={{ color: "grey", fontSize: "20px" }}>
                Com.
              </Typography>
              <div style={{ fontWeight: "bold" }}>{data[4]}</div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default KeywordDifficultyRightPaper;
