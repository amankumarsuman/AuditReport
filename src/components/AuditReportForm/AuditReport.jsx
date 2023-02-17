import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import LanguageIcon from "@mui/icons-material/Language";
import DateRangeIcon from "@mui/icons-material/DateRange";
import expelee from "../assets/expe.png";

import styles from "./auditReport.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";

import TelegramIcon from "@mui/icons-material/Telegram";
import { Button, Divider, Grid, TextField } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import auditMethodology from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";
import fourth from "../assets/4.png";
import manualAudit from "../assets/13.png";

function AuditReport() {
  const ReduxStoredData = useSelector((state) => state.publisher?.auditData);
  const logo = useSelector((state) => state.publisher?.logo);
  const socialMediaPic = useSelector(
    (state) => state.publisher?.socialMediaLogo
  );
  const inheritancePic = useSelector(
    (state) => state.publisher?.inheritancePic
  );

  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const exportPdf = () => {
    const elements = Array.from(document.querySelectorAll("#page"));
    const pdf = new jsPDF("p", "mm", "a4");

    (async function processElements() {
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0);

        if (index < elements.length - 1) {
          pdf.addPage();
        } else {
          console.log("downloading");
          pdf.save(`${ReduxStoredData?.companyName} Audit Report`);
        }
      }
    })();
  };

  return (
    <>
      <div
        style={{
          width: "100%",

          fontFamily: "'Century Gothic', sans-serif",
        }}
        id="capture"
      >
        <div id="page" className={styles.divOne}>
          <div style={{ textAlign: "center" }}>
            <img width="50%" style={{ marginTop: "100px" }} src={expelee} />
          </div>

          <div style={{ textAlign: "center" }}>
            <span
              style={{
                color: "white",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Building the Futuristic
            </span>

            <span
              style={{
                color: "#F56C0C",
                fontSize: "25px",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              Blockchain Ecosystem
            </span>
          </div>

          <div
            style={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Security Audit Report
          </div>

          <div
            style={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            For
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            {logo && (
              <img
                style={{ height: "300px", width: "300px", borderRadius: "50%" }}
                src={URL.createObjectURL(logo)}
                alt="Uploaded Image"
              />
            )}
          </div>
          <div
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "25px",
              // marginTop:"50px"
            }}
          >
            {ReduxStoredData?.companyName}
          </div>
          {/* <div>page 1</div> */}
        </div>

        <div style={{ width: "650px" }}>
          <div id="page" className={styles.backgroundTwo}>
            <div
              style={{
                fontSize: "40px",
                color: "#454545",
                textAlign: "center",
              }}
            >
              <h1
                className={styles.overviewDesc}
                style={{ paddingTop: "100px" }}
              >
                OVERVIEW
              </h1>
            </div>
            <div
              style={{
                fontSize: "20px",
                textAlign: "center",
                // color: "#343434",
                color: "#41484E",
                width: "90%",
                margin: "auto",
                // fontfamily: 'Century Gothic'
              }}
              className={styles.overviewDesc}
            >
              The Expelee team has performed a line-by-line manual analysis and
              automated review of the smart contract. The smart contract was
              analysed mainly for common smart contract vulnerabilities,
              exploits, and manipulation hacks. According to the smart contract
              audit:
            </div>
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  width: "88%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    border: "1px solid white",
                    background: "#4A74ED",
                    // textAlign: "center",

                    marginBottom: "5px",
                    marginRight: "10px",
                    width: "50%",
                    borderRadius: "20px 0px 0px 0px",
                    padding: "10px",
                  }}
                >
                  <span style={{ marginTop: "5px", marginLeft: "20px" }}>
                    <LibraryAddIcon sx={{ color: "white", fontSize: "20px" }} />
                  </span>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginLeft: "10px",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                    className={styles.overviewDesc}
                  >
                    Audit Result
                  </span>
                </div>
                <div
                  style={{
                    border: "1px solid white",
                    width: "50%",
                    background: "#4A74ED",
                    // textAlign: "center",
                    // marginRight: "10px",

                    marginBottom: "5px",
                    width: "50%",
                    borderRadius: "0px 20px 0px 0px",
                    padding: "10px",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginLeft: "10px",
                      fontFamily: "'Century Gothic', sans-serif",
                    }}
                  >
                    {ReduxStoredData?.auditResult ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Passed
                      </span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        {" "}
                        Failed
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "88%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    border: "1px solid white",
                    background: "#4A74ED",
                    // textAlign: "center",
                    // marginRight: "30px",

                    marginBottom: "5px",
                    marginRight: "10px",
                    width: "50%",
                    borderRadius: "0px 0px 0px 0px",
                    padding: "10px",
                  }}
                >
                  <span
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <AddModeratorIcon
                      sx={{ color: "white", fontSize: "20px" }}
                    />
                  </span>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginLeft: "10px",
                      fontFamily: "'Century Gothic', sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    KYC Verification
                  </span>
                </div>
                <div
                  style={{
                    border: "1px solid white",
                    width: "50%",
                    background: "#4A74ED",
                    // textAlign: "center",
                    marginBottom: "5px",
                    width: "50%",
                    borderRadius: "0px 0px 0px 0px",
                    padding: "10px",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginLeft: "10px",
                      fontFamily: "'Century Gothic', sans-serif",
                    }}
                  >
                    {ReduxStoredData?.kyc ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        {" "}
                        Done
                      </span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        {" "}
                        Not Done
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "88%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    border: "1px solid white",
                    background: "#4A74ED",
                    // textAlign: "center",
                    marginBottom: "15px",
                    marginRight: "10px",
                    width: "50%",
                    borderRadius: "0px 0px 0px 20px",
                    padding: "10px",
                  }}
                >
                  <span style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <DateRangeIcon sx={{ color: "white", fontSize: "20px" }} />
                  </span>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginLeft: "10px",
                      fontFamily: "'Century Gothic', sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Date
                  </span>
                </div>
                <div
                  style={{
                    border: "1px solid white",
                    width: "50%",
                    background: "#4A74ED",
                    // textAlign: "center",
                    marginBottom: "15px",
                    width: "50%",
                    borderRadius: "0px 0px 20px 0px",
                    padding: "10px",
                  }}
                >
                  {/* <span>
                    <LibraryAddIcon sx={{ color: "white" }} />
                  </span> */}
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginLeft: "10px",
                      fontFamily: "'Century Gothic', sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {ReduxStoredData?.date
                      ? ReduxStoredData?.date
                      : new Date().toISOString().substring(0, 10)}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                color: "black",
                fontSize: "30px",
                textAlign: "center",
                marginTop: "80px",
                fontWeight: "bold",
                fontFamily: "'Century Gothic', sans-serif",
              }}
            >
              Audit Passed With{" "}
              <span
                style={{
                  color: `${
                    ReduxStoredData?.risk === "No"
                      ? "green"
                      : ReduxStoredData?.risk === "Low"
                      ? "#98fb98"
                      : ReduxStoredData?.risk === "Moderate"
                      ? "yellow"
                      : ReduxStoredData?.risk === "High"
                      ? "red"
                      : null
                  }`,
                }}
              >
                {ReduxStoredData?.risk ? ReduxStoredData?.risk : "No"}
              </span>{" "}
              Risk
            </div>
            <div
              style={{
                color: "black",
                fontSize: "30px",
                textAlign: "center",
                marginTop: "20px",
                fontWeight: "bold",
                fontFamily: "'Century Gothic', sans-serif",
              }}
            >
              - Team Expelee
            </div>
          </div>
        </div>

        {/* description */}
        {ReduxStoredData?.description ? (
          <div style={{ width: "650px", height: "100%" }}>
            <div id="page" className={styles.backgroundTwo}>
              <div
                style={{
                  fontSize: "30px",
                  color: "#454545",
                  textAlign: "center",

                  lineHeight: "0px",
                }}
              >
                <p
                  style={{
                    paddingTop: "160px",
                    fontWeight: "bold",
                    fontSize: "90px",
                  }}
                >
                  PROJECT
                </p>
                <p
                  style={{
                    // paddingTop: 0,
                    fontWeight: "bold",
                    paddingBottom: "15px",
                    fontSize: "60px",
                    marginTop: "-15px",
                  }}
                >
                  DESCRIPTION
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    paddingTop: "-10px",
                  }}
                >
                  {ReduxStoredData?.companyName}
                </p>
              </div>

              <div style={{ paddingTop: "20px" }}>
                <p style={{ fontSize: "20px", width: "85%", margin: "auto" }}>
                  {ReduxStoredData?.description}
                </p>
              </div>

              <div>
                {logo && (
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      border: "5px solid black",
                      padding: "10px",
                      borderRadius: "50%",
                      marginTop: "50px",
                    }}
                    src={URL.createObjectURL(logo)}
                    alt="img"
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}

        {ReduxStoredData?.weblink ? (
          <div style={{ width: "650px", height: "100%" }}>
            <div id="page" className={styles.backgroundTwo}>
              <div
                style={{
                  fontSize: "30px",
                  color: "#454545",
                  textAlign: "center",
                  // marginTop:"150px",
                  // lineHeight: "1px",
                }}
              >
                <p
                  style={{
                    paddingTop: "100px",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  Social Media Profiles
                </p>

                <p
                  style={{
                    fontWeight: "bold",
                    // paddingTop: "0",
                    color: "black",
                    fontSize: "50px",
                    marginTop: "-30px",
                  }}
                >
                  {ReduxStoredData?.companyName}
                </p>

                <div className={styles.laptop}>
                  {/* {
socialMediaPic &&
            <img
              style={{ width: "70%", height: "70%" }}
              src={URL.createObjectURL(socialMediaPic)}

              alt="img"
            />
            } */}

                  {socialMediaPic && (
                    <img
                      style={{
                        height: "190px",
                        width: "310px",
                        // borderRadius: "50%",
                        // border:"1px solid red",
                        marginTop: "97px",
                        marginLeft: "-78px",
                      }}
                      src={URL.createObjectURL(socialMediaPic)}
                      alt="Uploaded Image"
                    />
                  )}
                </div>
              </div>
              <div style={{ marginLeft: "70px", marginTop: "-40px" }}>
                {ReduxStoredData?.weblink ? (
                  <>
                    <div>
                      <span
                        onClick={() => handleNavigate(ReduxStoredData?.weblink)}
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          marginTop: "-13px",
                        }}

                        // href={ReduxStoredData?.weblink}
                      >
                        <LanguageIcon sx={{ color: "#4974ED" }} />{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "27px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        {ReduxStoredData?.weblink}{" "}
                      </span>
                    </div>
                  </>
                ) : null}
                <br />

                {ReduxStoredData?.telegramLink ? (
                  <div style={{ marginTop: "5px" }}>
                    <span
                      onClick={() =>
                        handleNavigate(ReduxStoredData?.telegramLink)
                      }
                      style={{
                        fontSize: "27px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      // href={ReduxStoredData?.telegramLink}
                    >
                      {" "}
                      <TelegramIcon sx={{ color: "#4974ED" }} />{" "}
                      {ReduxStoredData?.telegramLink}
                    </span>
                  </div>
                ) : null}
                <br />

                {ReduxStoredData?.twitterLink ? (
                  <div style={{ marginTop: "-13px" }}>
                    <span
                      onClick={() =>
                        handleNavigate(ReduxStoredData?.twitterLink)
                      }
                      style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      // href={ReduxStoredData?.twitterLink}
                    >
                      {" "}
                      <TwitterIcon sx={{ color: "#4974ED" }} />{" "}
                    </span>
                    <span
                      style={{
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "27px",
                      }}
                    >
                      {ReduxStoredData?.twitterLink}
                    </span>
                  </div>
                ) : null}
              </div>

              <div
                style={{
                  color: "#454545",
                  textAlign: "center",
                  // marginTop:"150px",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "#454545",
                    textAlign: "center",
                    fontWeight: "bold",
                    // lineHeight: "1px",

                    marginTop: "40px",
                  }}
                >
                  It’s always good to check the social profiles of the project,
                  before making your investment.
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    color: "#454545",
                    textAlign: "center",
                    fontWeight: "bold",

                    // marginTop: "-5px",
                  }}
                >
                  -Team Expelee
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/* contract details */}
        {ReduxStoredData?.tokenName ? (
          <div style={{ width: "650px", height: "100%" }}>
            <div id="page" className={styles.backgroundTwo}>
              <div
                style={{
                  fontSize: "40px",
                  color: "#454545",
                  textAlign: "center",
                  // marginTop:"150px",
                }}
              >
                <p
                  style={{
                    paddingTop: "100px",
                    fontWeight: "bold",
                    fontSize: "50px",
                    color: "#4974ED",
                  }}
                >
                  CONTRACT DETAILS
                </p>
                <Grid
                  container
                  spacing={2}
                  sx={{ width: "95%", margin: "auto" }}
                  // sx={{ paddingLeft: "100px", paddingRight: "100px" }}
                >
                  <Grid item xs={6}>
                    {/* <TextField
                fullWidth
                label="Token Name"
                value={ReduxStoredData?.tokenName}
                variant="standard"
              /> */}
                    <TextField
                      id="outlined-number"
                      label="Token Name"
                      fullWidth
                      //   type="number"
                      value={ReduxStoredData?.tokenName?.toUpperCase()}
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      // fullWidth
                      label="Symbol"
                      value={ReduxStoredData?.tokenSymbol}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Network"
                      value={ReduxStoredData?.network?.toUpperCase()}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Language"
                      value={ReduxStoredData?.language}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-number"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Contract Address (Verified)"
                      value={ReduxStoredData?.address}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Token Type"
                      value={ReduxStoredData?.tokenType?.toUpperCase()}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Total Supply"
                      value={ReduxStoredData?.totalSupply}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Compiler"
                      value={ReduxStoredData?.compiler}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Optimization Enabled"
                      value={ReduxStoredData?.optimizationEnabled}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "16px", fontWeight: "bold" },
                      }}
                      fullWidth
                      label="Contract SHA-256 Checksum:"
                      value={ReduxStoredData?.sha256Checksum}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-number"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Owner's Wallet"
                      value={ReduxStoredData?.ownerWallet}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      inputProps={{
                        style: { fontSize: "20px", fontWeight: "bold" },
                      }}
                      label="Deployer's Wallet"
                      value={ReduxStoredData?.deployerWallet}
                      variant="standard"
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        ) : null}

        {/* audit methodology */}
        <div id="page">
          <img width="42.5%" height="100%" src={auditMethodology} />
        </div>

        {/* function overview */}
        <div style={{ width: "650px", height: "100%" }}>
          <div id="page" className={styles.backgroundTwo}>
            <div
              style={{
                // fontSize: "80px",
                color: "#454545",
                textAlign: "center",
                // marginTop:"150px",
              }}
            >
              <p
                style={{
                  paddingTop: "100px",
                  fontWeight: "bold",
                  fontSize: "50px",
                  color: "#4974ED",
                }}
              >
                FUNCTION OVERVIEW
              </p>
            </div>
            <div style={{ width: "90%", margin: "auto" }}>
              <Grid
                container
                sx={
                  {
                    //   backgroundColor: "black",
                  }
                }
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "30px 0px 0px 0px",
                  }}
                >
                  Can Take Back Ownership
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.canTakeBackOwnership === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "0px 30px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.canTakeBackOwnership
                    ? ReduxStoredData?.canTakeBackOwnership
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Owner Change Balance
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.ownerChangeBalance === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.ownerChangeBalance
                    ? ReduxStoredData?.ownerChangeBalance
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Blacklist
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.blacklist === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.blacklist
                    ? ReduxStoredData?.blacklist
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Modify Fees
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.ModifyFees === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.ModifyFees
                    ? ReduxStoredData?.ModifyFees
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Proxy
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.Proxy === "Detected" ? "red" : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.Proxy
                    ? ReduxStoredData?.Proxy
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Whitelisted
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.Whitelisted === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.Whitelisted
                    ? ReduxStoredData?.Whitelisted
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Anti Whale
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.AntiWhale === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.AntiWhale
                    ? ReduxStoredData?.AntiWhale
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Trading Cooldown
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.TradingCooldown === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.TradingCooldown
                    ? ReduxStoredData?.TradingCooldown
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Transfer Pausable
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.TransferPausable === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.TransferPausable
                    ? ReduxStoredData?.TransferPausable
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Cannot Sell All
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.CannotSellAll === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.CannotSellAll
                    ? ReduxStoredData?.CannotSellAll
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Hidden Owner
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.HiddenOwner === "Detected"
                        ? "red"
                        : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.HiddenOwner
                    ? ReduxStoredData?.HiddenOwner
                    : "Not Detected"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#0096FF",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Mint
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#343434",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.Mint === "Detected" ? "red" : "#00ff72"
                    }`,

                    padding: "10px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.Mint
                    ? ReduxStoredData?.Mint
                    : "Not Detected"}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        {/* vulnerabilities */}
        <div style={{ width: "650px", height: "100%" }}>
          <div id="page" className={styles.backgroundTwo}>
            <div
              style={{
                color: "#454545",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  paddingTop: "100px",
                  fontWeight: "bold",
                  fontSize: "40px",
                  color: "#4974ED",
                }}
              >
                VULNERABILITY CHECKLIST
              </p>
            </div>
            <div style={{ width: "90%", margin: "auto" }}>
              <Grid
                container
                sx={
                  {
                    //   backgroundColor: "black",
                  }
                }
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "30px 0px 0px 0px",
                  }}
                >
                  Design Logic
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.designLogic === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "0px 30px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.designLogic
                    ? ReduxStoredData?.designLogic
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Compiler Warnings
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.CompilerWarnings === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.CompilerWarnings
                    ? ReduxStoredData?.CompilerWarnings
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Private User Data Leak
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.PrivateUserDataLeak === "Not Passed"
                        ? "red"
                        : "white"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.PrivateUserDataLeak
                    ? ReduxStoredData?.PrivateUserDataLeak
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Timestamp Dependence
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.TimestampDependence === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.TimestampDependence
                    ? ReduxStoredData?.TimestampDependence
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Integer OverFlow And UnderFlow
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.IntegerOverFlowAndUnderFlow === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.IntegerOverFlowAndUnderFlow
                    ? ReduxStoredData?.IntegerOverFlowAndUnderFlow
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Race Conditions
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.RaceConditions === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.RaceConditions
                    ? ReduxStoredData?.RaceConditions
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Possible Delays In Data Delivery
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.DelayInDataDelivery === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.DelayInDataDelivery
                    ? ReduxStoredData?.DelayInDataDelivery
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Oracle Calls
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.OracleCalls === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.OracleCalls
                    ? ReduxStoredData?.OracleCalls
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  Front Running
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.FrontRunning === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.FrontRunning
                    ? ReduxStoredData?.FrontRunning
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  DoS With Revert
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.revert === "Passed" ? "white" : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.revert ? ReduxStoredData?.revert : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  DoS With Block Gas Limit
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.blockGasLimit === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 20px 0px 0px",
                  }}
                >
                  {ReduxStoredData?.blockGasLimit
                    ? ReduxStoredData?.blockGasLimit
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "0px 0px 0px 0px",
                  }}
                >
                  Methods Execution Permissions
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.methodExePermission === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.methodExePermission
                    ? ReduxStoredData?.methodExePermission
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Economy Model
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.ecoModel === "Passed" ? "white" : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.ecoModel
                    ? ReduxStoredData?.ecoModel
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Impact of the exchange rate on the logic
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // color: "white",
                    color: `${
                      ReduxStoredData?.exchangeRateImpact === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.exchangeRateImpact
                    ? ReduxStoredData?.exchangeRateImpact
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Malicious Event log
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.maliciousLog === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.maliciousLog
                    ? ReduxStoredData?.maliciousLog
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Scoping and declarrations
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.scoping === "Passed" ? "white" : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.scoping
                    ? ReduxStoredData?.scoping
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Uninitialized storage pointers
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.storagePointer === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.storagePointer
                    ? ReduxStoredData?.storagePointer
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Arithmetic accuracy
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.arithmatic === "Passed" ? "white" : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.arithmatic
                    ? ReduxStoredData?.arithmatic
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Cross-function race conditions
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.racecond === "Passed" ? "white" : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.racecond
                    ? ReduxStoredData?.racecond
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Safe Zeppelin module
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.zeppelinModule === "Passed"
                        ? "white"
                        : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    // borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.zeppelinModule
                    ? ReduxStoredData?.zeppelinModule
                    : "Passed"}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "#262727",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "0px 0px 0px 30px",
                  }}
                >
                  Fallback function security
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor: "rgb(37, 150, 190)",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: `${
                      ReduxStoredData?.fallbackFn === "Passed" ? "white" : "red"
                    }`,

                    padding: "8px",
                    height: "70%",
                    borderBottom: "5px solid white",
                    borderRadius: "0px 0px 30px 0px",
                  }}
                >
                  {ReduxStoredData?.fallbackFn
                    ? ReduxStoredData?.fallbackFn
                    : "Passed"}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        {/* risk classification */}
        <div id="page">
          <img width="42.5%" height="100%" src={third} />
        </div>

        {/* audit summary */}
        {ReduxStoredData?.tool1 ? (
          <div style={{ width: "650px", height: "100%" }}>
            <div id="page" className={styles.backgroundTwo}>
              <div
                style={{
                  // fontSize: "50px",
                  color: "#454545",
                  textAlign: "center",
                  // marginTop:"150px",
                }}
              >
                <p
                  style={{
                    paddingTop: "100px",
                    fontWeight: "bold",
                    fontSize: "50px",
                    color: "#4974ED",
                  }}
                >
                  AUDIT SUMMARY
                </p>
              </div>
              <div style={{ width: "90%", margin: "auto", marginTop: "-40px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Used Tools:
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Manual Review - {ReduxStoredData?.manualReview}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.tool1}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.tool2}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.tool3}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.tool4}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.tool4}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.tool5}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.tool6}
                </p>
              </div>
              <div
                style={{
                  borderBottom: "3px solid black",
                  marginLeft: "50px",
                  marginRight: "50px",
                }}
              ></div>
              <p
                style={{
                  // paddingLeft: "50px",
                  // paddingRight: "50px",
                  marginLeft: "50px",
                  fontWeight: "bold",

                  fontSize: "30px",
                }}
              >
                Inheritance Trees:
              </p>
              <div>
                {/* <img
            style={{ marginLeft: "80px" }}
            src="https://www.onepointesolutions.com/wp-content/uploads/2022/05/5-Types-of-Chemistry.jpg"
            alt="img"
          /> */}
                {inheritancePic && (
                  <img
                    style={{ height: "200px", width: "600px" }}
                    src={URL.createObjectURL(inheritancePic)}
                    alt="inheritance Image"
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}

        {/* summary */}

        {ReduxStoredData?.summary1 ? (
          <div style={{ width: "650px", height: "100%" }}>
            <div id="page" className={styles.backgroundTwo}>
              <div style={{ width: "90%", margin: "auto", marginTop: "-40px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "35px",
                    paddingTop: "100px",
                  }}
                >
                  Summary:
                </p>

                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary1}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary2}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary3}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary4}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary5}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary6}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary7}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  - {ReduxStoredData?.summary8}
                </p>
              </div>

              <div></div>
            </div>
          </div>
        ) : null}

        {/* features */}
        {ReduxStoredData?.featureHead1 ? (
          <div style={{ width: "650px", height: "100%" }}>
            <div id="page" className={styles.backgroundTwo}>
              <div
                style={{
                  color: "#454545",
                  textAlign: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      paddingTop: "100px",
                      fontWeight: "bold",
                      fontSize: "80px",

                      color: "#4974ED",
                    }}
                  >
                    Features
                  </p>
                </div>
              </div>
              <div style={{ width: "90%", margin: "auto", marginTop: "-50px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  {ReduxStoredData?.featureHead1}
                </p>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {ReduxStoredData?.featureDesc1}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  {ReduxStoredData?.featureHead2}
                </p>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {ReduxStoredData?.featureDesc2}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  {ReduxStoredData?.featureHead3}
                </p>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {ReduxStoredData?.featureDesc3}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  {ReduxStoredData?.featureHead4}
                </p>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {ReduxStoredData?.featureDesc4}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/* manualaudit */}
        <div id="page">
          <img width="43.5%" height="100%" src={manualAudit} />
        </div>

        {/* finding */}
        {ReduxStoredData?.highriskfinding ||
        ReduxStoredData?.mediumriskfinding ||
        ReduxStoredData?.lowriskfinding ||
        ReduxStoredData?.suggestion ||
        ReduxStoredData?.gas ? (
          <div style={{ width: "650px", height: "100%" }}>
            <div id="page" className={styles.backgroundTwo}>
              <div
                style={{
                  // fontSize: "50px",
                  color: "#454545",
                  textAlign: "center",
                  // marginTop:"150px",
                }}
              >
                <p
                  style={{
                    paddingTop: "100px",
                    fontWeight: "bold",
                    fontSize: "60px",
                    color: "blue",
                  }}
                >
                  FINDINGS
                </p>
              </div>
              <div style={{ width: "90%", margin: "auto", marginTop: "-40px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  <ul>
                    {ReduxStoredData?.highriskfinding ? (
                      <li style={{ color: "red" }}>
                        High Risk Findings:{ReduxStoredData?.highriskfinding}
                      </li>
                    ) : null}
                    {ReduxStoredData?.mediumriskfinding ? (
                      <li style={{ color: "rgba(244,145,110,255)" }}>
                        Medium Risk Findings:
                        {ReduxStoredData?.mediumriskfinding}
                      </li>
                    ) : null}

                    {ReduxStoredData?.lowriskfinding ? (
                      <li style={{ color: "green" }}>
                        Low Risk Findings:{ReduxStoredData?.lowriskfinding}
                      </li>
                    ) : null}

                    {ReduxStoredData?.suggestion ? (
                      <li style={{ color: "blue" }}>
                        High Risk Findings:{ReduxStoredData?.suggestion}
                      </li>
                    ) : null}
                    {ReduxStoredData?.gas ? (
                      <li style={{ color: "blue" }}>
                        Gas Optimizations:{ReduxStoredData?.gas}
                      </li>
                    ) : null}
                  </ul>
                </p>
                <Divider sx={{ backgroundColor: "grey", height: "2px" }} />
                {ReduxStoredData?.highriskfinding
                  ? ReduxStoredData?.highriskDetails
                  : null}
                {ReduxStoredData?.lowriskfinding
                  ? ReduxStoredData?.lowriskDetails
                  : null}
                {ReduxStoredData?.mediumriskfinding
                  ? ReduxStoredData?.mediumriskDetails
                  : null}
                {ReduxStoredData?.suggestion
                  ? ReduxStoredData?.suggestionDetails
                  : null}
                {ReduxStoredData?.gas ? ReduxStoredData?.gasDetails : null}
              </div>
            </div>
          </div>
        ) : null}

        <div id="page">
          <img width="42.5%" height="100%" src={fourth} />
        </div>
        <div id="page">
          <img width="42.5%" height="100%" src={second} />
        </div>
      </div>
      <Button variant="contained" onClick={exportPdf}>
        Download Pdf
      </Button>
    </>
  );
}

export default AuditReport;
