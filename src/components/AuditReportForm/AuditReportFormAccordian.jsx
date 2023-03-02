import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  individualPublisherDataEditedSuccessfully,
  setAuditForm,
} from "../redux/action";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuditReport from "./AuditReport";
import PdfReport from "./PdfWithLink";
import { PDFDownloadLink } from "@react-pdf/renderer";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const individualPublisherData = useSelector(
    (state) => state?.publisher?.individualPublisherData
  );
  // console.log(individualPublisherData,"individualPublisherData")
  const { isEdit, isNew } = useSelector((state) => state?.publisher);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChangePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const dispatch = useDispatch();
  const init = {
    companyName: "",
    logo: null,
    auditResult: false,
    kyc: false,
    risk: "Low",
    description: "",
    socialMediaPic: null,
    weblink: "",
    twitterLink: "",
    telegramLink: "",
    tokenName: "",
    tokenType: "",
    tokenSymbol: "",
    network: "",
    language: "",
    address: "",
    totalSupply: "",
    compiler: "",
    optimizationEnabled: "",
    sha256Checksum: "",
    ownerWallet: "",
    deployerWallet: "",
    canTakeBackOwnership: "Not Detected",
    ownerChangeBalance: "Not Detected",
    blacklist: "Not Detected",
    ModifyFees: "Not Detected",
    Proxy: "Not Detected",
    Whitelisted: "Not Detected",
    AntiWhale: "Not Detected",
    TradingCooldown: "Not Detected",
    TransferPausable: "Not Detected",
    CannotSellAll: "Not Detected",
    HiddenOwner: "Not Detected",
    Mint: "Not Detected",
    //not
    designLogic: "Passed",
    CompilerWarnings: "Passed",
    PrivateUserDataLeak: "Passed",
    TimestampDependence: "Passed",
    IntegerOverFlowAndUnderFlow: "Passed",
    //not till here
    RaceConditions: "Passed",
    DelayInDataDelivery: "Passed",
    OracleCalls: "Passed",
    FrontRunning: "Passed",
    revert: "Passed",
    ecoModel: "Passed",
    blockGasLimit: "Passed",
    methodExePermission: "Passed",
    exchangeRateImpact: "Passed",
    maliciousLog: "Passed",
    scoping: "Passed",
    storagePointer: "Passed",
    arithmatic: "Passed",
    racecond: "Passed",
    zeppelinModule: "Passed",
    fallbackFn: "Passed",
    inheritancePic: null,
    highriskfinding: 0,
    lowriskfinding: 0,
    mediumriskfinding: 0,
    criticalRiskFinding: 0,
    suggestion: 0,
    gas: 0,
    featureHead1: "",
    featureHead2: "",
    featureHead3: "",
    featureHead4: "",
    featureDesc1: "",
    featureDesc2: "",
    featureDesc3: "",
    featureDesc4: "",
    manualReview: "",
    tool1: "",
    tool2: "",
    tool3: "",
    tool4: "",
    tool5: "",
    tool6: "",
    highriskDetails: "",
    lowriskDetails: "",
    mediumriskDetails: "",
    suggestionDetails: "",
    criticalRiskDetails: "",
    gasDetails: "",
    summary: "",
    fnTest1: "",
    fnTest1Passed: true,
    fnTest1Desc: "",
    fnTest2: "",
    fnTest2Passed: true,
    fnTest2Desc: "",
    fnTest3: "",
    fnTest3Passed: true,
    fnTest3Desc: "",
    fnTest4: "",
    fnTest4Passed: true,
    fnTest4Desc: "",
    fnTest5: "",
    fnTest5Passed: true,
    fnTest5Desc: "",
  };

  // const [input, setInput] = useState(init);
  const [input, setInput] = useState(isEdit ? individualPublisherData : init);
  const [image, setImage] = useState(null);
  const [socialMediaPic, setSocialMediaPic] = useState(null);
  const [inheritancePic, setInheritancePic] = useState(null);
  const [criticalImage1, setCriticalImage1] = useState(null);
  const [criticalImage2, setCriticalImage2] = useState(null);
  const [criticalImage3, setCriticalImage3] = useState(null);
  const [criticalImage4, setCriticalImage4] = useState(null);
  const [criticalImage5, setCriticalImage5] = useState(null);
  const [criticalImage6, setCriticalImage6] = useState(null);
  const [criticalImage7, setCriticalImage7] = useState(null);
  const [criticalImage8, setCriticalImage8] = useState(null);
  const [criticalImage, setCriticalImage] = useState([]);
  console.log(socialMediaPic, "check soccial");

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSocialMediaPic = (e) => {
    console.log(e.target.files[0]);
    setSocialMediaPic(e.target.files[0]);
  };
  const handleCriticalImage1 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage1(e.target.files[0]);
  };
  const handleCriticalImage = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage(e.target.files[0]);
  };
  const handleCriticalImage2 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage2(e.target.files[0]);
  };
  const handleCriticalImage3 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage3(e.target.files[0]);
  };
  const handleCriticalImage4 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage4(e.target.files[0]);
  };
  const handleCriticalImage5 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage5(e.target.files[0]);
  };
  const handleCriticalImage6 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage6(e.target.files[0]);
  };
  const handleCriticalImage7 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage7(e.target.files[0]);
  };
  const handleCriticalImage8 = (e) => {
    console.log(e.target.files[0]);
    setCriticalImage8(e.target.files[0]);
  };
  const handleInheritanceaPic = (e) => {
    setInheritancePic(e.target.files[0]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    // if (name === "logo") {
    //     setInput({ ...input, [name]: e.target.files[0] })
    // }
    // if (name === "inheritancePic") {
    //     setInheritancePic({ ...input, ["inheritancePic"]: e.target.files[0] })
    // }
    // if (name === "socialMediaPic") {
    //     setInput({ ...input, ["socialMediaPic"]: e.target.files[0] })
    // }
    setInput({ ...input, [name]: value });
  };
  console.log(input);

  const handleSubmit = () => {
    const {
      companyName,
      logo,
      auditResult,
      kyc,
      risk,
      description,
      socialMediaPic,
      weblink,
      twitterLink,
      telegramLink,
      tokenName,
      tokenType,
      tokenSymbol,
      network,
      language,
      address,
      totalSupply,
      compiler,
      optimizationEnabled,
      sha256Checksum,
      ownerWallet,
      deployerWallet,
      canTakeBackOwnership,
      ownerChangeBalance,
      blacklist,
      ModifyFees,
      Proxy,
      Whitelisted,
      AntiWhale,
      TradingCooldown,
      TransferPausable,
      CannotSellAll,
      HiddenOwner,
      Mint,
      //not
      designLogic,
      CompilerWarnings,
      PrivateUserDataLeak,
      TimestampDependence,
      IntegerOverFlowAndUnderFlow,
      //not till here
      RaceConditions,
      DelayInDataDelivery,
      OracleCalls,
      FrontRunning,
      revert,
      ecoModel,
      blockGasLimit,
      methodExePermission,
      exchangeRateImpact,
      maliciousLog,
      scoping,
      storagePointer,
      arithmatic,
      racecond,
      zeppelinModule,
      fallbackFn,
      inheritancePic,
      highriskfinding,
      lowriskfinding,
      mediumriskfinding,
      criticalRiskFinding,
      criticalRiskDetails,
      suggestion,
      gas,
      featureHead1,
      featureHead2,
      featureHead3,
      featureHead4,
      featureDesc1,
      featureDesc2,
      featureDesc3,
      featureDesc4,
      manualReview,
      tool1,
      tool2,
      tool3,
      tool4,
      tool5,
      tool6,
      highriskDetails,
      lowriskDetails,
      mediumriskDetails,
      suggestionDetails,
      gasDetails,
      summary,
      fnTest1,
      fnTest1Passed,
      fnTest1Desc,
      fnTest2,
      fnTest2Passed,
      fnTest2Desc,
      fnTest3,
      fnTest3Passed,
      fnTest3Desc,
      fnTest4,
      fnTest4Passed,
      fnTest4Desc,
      fnTest5,
      fnTest5Passed,
      fnTest5Desc,
    } = input;

    axios
      .patch(
        `https://expeauditreport.onrender.com/api/auditReport/update/${individualPublisherData?._id}`,
        {
          companyName,
          logo,
          auditResult,
          kyc,
          risk,
          description,
          socialMediaPic,
          weblink,
          twitterLink,
          telegramLink,
          tokenName,
          tokenType,
          tokenSymbol,
          network,
          language,
          address,
          totalSupply,
          compiler,
          optimizationEnabled,
          sha256Checksum,
          ownerWallet,
          deployerWallet,
          canTakeBackOwnership,
          ownerChangeBalance,
          blacklist,
          ModifyFees,
          Proxy,
          Whitelisted,
          AntiWhale,
          TradingCooldown,
          TransferPausable,
          CannotSellAll,
          HiddenOwner,
          Mint,
          //not
          designLogic,
          CompilerWarnings,
          PrivateUserDataLeak,
          TimestampDependence,
          IntegerOverFlowAndUnderFlow,
          //not till here
          RaceConditions,
          DelayInDataDelivery,
          OracleCalls,
          FrontRunning,
          revert,
          ecoModel,
          blockGasLimit,
          methodExePermission,
          exchangeRateImpact,
          maliciousLog,
          scoping,
          storagePointer,
          arithmatic,
          racecond,
          zeppelinModule,
          fallbackFn,
          inheritancePic,
          highriskfinding,
          lowriskfinding,
          mediumriskfinding,
          criticalRiskFinding,
          criticalRiskDetails,
          suggestion,
          gas,
          featureHead1,
          featureHead2,
          featureHead3,
          featureHead4,
          featureDesc1,
          featureDesc2,
          featureDesc3,
          featureDesc4,
          manualReview,
          tool1,
          tool2,
          tool3,
          tool4,
          tool5,
          tool6,
          highriskDetails,
          lowriskDetails,
          mediumriskDetails,
          suggestionDetails,
          gasDetails,
          summary,
          fnTest1,
          fnTest1Passed,
          fnTest1Desc,
          fnTest2,
          fnTest2Passed,
          fnTest2Desc,
          fnTest3,
          fnTest3Passed,
          fnTest3Desc,
          fnTest4,
          fnTest4Passed,
          fnTest4Desc,
          fnTest5,
          fnTest5Passed,
          fnTest5Desc,
        }
      )
      .then((res) => {
        if (res?.data?.success) {
          navigate("/");
          dispatch(
            individualPublisherDataEditedSuccessfully({ isEditData: false })
          );
          alert("Record Updated successfully");
        }
        console.log(res);
        if (!res?.data.success) {
          // <CustomizedDialogs
          //   open={showDialog}
          //   setShowDialog={setShowDialog}
          //   err={res?.data?.message}
          // />;
          console.log("error", res);
          alert("res?.data?.message");
          // setShowDialog(true);
        }
      })
      .catch((err) => {
        if (!err?.response?.data?.success) {
          // setShowDialog(true);
          // <CustomizedDialogs
          //   showDialog={true}
          //   setShowDialog={setShowDialog}
          //   err={err?.response?.data?.message}
          // />;
          alert(err?.response?.data?.message);
        }
        // console.log("err", err);
        // console.log("err", err?.response?.data?.message);
      });

    dispatch(
      setAuditForm({
        data: input,
        logo: image,
        inheritancePic: inheritancePic,
        socialMediaPic: socialMediaPic,
        criticalImage1: criticalImage1,
        criticalImage2: criticalImage2,
        criticalImage3: criticalImage3,
        criticalImage4: criticalImage4,
        criticalImage5: criticalImage5,
        criticalImage6: criticalImage6,
        criticalImage7: criticalImage7,
        criticalImage8: criticalImage8,
      })
    );
  };
  const handleAdd = () => {
    // const {
    //   companyName,
    //   logo,
    //   auditResult,
    //   kyc,
    //   risk,
    //   description,
    //   socialMediaPic,
    //   weblink,
    //   twitterLink,
    //   telegramLink,
    //   tokenName,
    //   tokenType,
    //   tokenSymbol,
    //   network,
    //   language,
    //   address,
    //   totalSupply,
    //   compiler,
    //   optimizationEnabled,
    //   sha256Checksum,
    //   ownerWallet,
    //   deployerWallet,
    //   canTakeBackOwnership,
    //   ownerChangeBalance,
    //   blacklist,
    //   ModifyFees,
    //   Proxy,
    //   Whitelisted,
    //   AntiWhale,
    //   TradingCooldown,
    //   TransferPausable,
    //   CannotSellAll,
    //   HiddenOwner,
    //   Mint,
    //   //not
    //   designLogic,
    //   CompilerWarnings,
    //   PrivateUserDataLeak,
    //   TimestampDependence,
    //   IntegerOverFlowAndUnderFlow,
    //   //not till here
    //   RaceConditions,
    //   DelayInDataDelivery,
    //   OracleCalls,
    //   FrontRunning,
    //   revert,
    //   ecoModel,
    //   blockGasLimit,
    //   methodExePermission,
    //   exchangeRateImpact,
    //   maliciousLog,
    //   scoping,
    //   storagePointer,
    //   arithmatic,
    //   racecond,
    //   zeppelinModule,
    //   fallbackFn,
    //   inheritancePic,
    //   highriskfinding,
    //   lowriskfinding,
    //   mediumriskfinding,
    //   suggestion,
    //   gas,
    //   featureHead1,
    //   featureHead2,
    //   featureHead3,
    //   featureHead4,
    //   featureDesc1,
    //   featureDesc2,
    //   featureDesc3,
    //   featureDesc4,
    //   manualReview,
    //   tool1,
    //   tool2,
    //   tool3,
    //   tool4,
    //   tool5,
    //   tool6,
    //   highriskDetails,
    //   lowriskDetails,
    //   mediumriskDetails,
    //   suggestionDetails,
    //   gasDetails,
    // } = input;

    // axios
    //   .patch(`https://expeauditreport.onrender.com/api/auditReport/add`, {
    //     companyName,
    //     logo,
    //     auditResult,
    //     kyc,
    //     risk,
    //     description,
    //     socialMediaPic,
    //     weblink,
    //     twitterLink,
    //     telegramLink,
    //     tokenName,
    //     tokenType,
    //     tokenSymbol,
    //     network,
    //     language,
    //     address,
    //     totalSupply,
    //     compiler,
    //     optimizationEnabled,
    //     sha256Checksum,
    //     ownerWallet,
    //     deployerWallet,
    //     canTakeBackOwnership,
    //     ownerChangeBalance,
    //     blacklist,
    //     ModifyFees,
    //     Proxy,
    //     Whitelisted,
    //     AntiWhale,
    //     TradingCooldown,
    //     TransferPausable,
    //     CannotSellAll,
    //     HiddenOwner,
    //     Mint,
    //     //not
    //     designLogic,
    //     CompilerWarnings,
    //     PrivateUserDataLeak,
    //     TimestampDependence,
    //     IntegerOverFlowAndUnderFlow,
    //     //not till here
    //     RaceConditions,
    //     DelayInDataDelivery,
    //     OracleCalls,
    //     FrontRunning,
    //     revert,
    //     ecoModel,
    //     blockGasLimit,
    //     methodExePermission,
    //     exchangeRateImpact,
    //     maliciousLog,
    //     scoping,
    //     storagePointer,
    //     arithmatic,
    //     racecond,
    //     zeppelinModule,
    //     fallbackFn,
    //     inheritancePic,
    //     highriskfinding,
    //     lowriskfinding,
    //     mediumriskfinding,
    //     suggestion,
    //     gas,
    //     featureHead1,
    //     featureHead2,
    //     featureHead3,
    //     featureHead4,
    //     featureDesc1,
    //     featureDesc2,
    //     featureDesc3,
    //     featureDesc4,
    //     manualReview,
    //     tool1,
    //     tool2,
    //     tool3,
    //     tool4,
    //     tool5,
    //     tool6,
    //     highriskDetails,
    //     lowriskDetails,
    //     mediumriskDetails,
    //     suggestionDetails,
    //     gasDetails,
    //   })
    //   .then((res) => {
    //     if (res?.data?.success) {
    //       navigate("/");
    //       dispatch(
    //         individualPublisherDataEditedSuccessfully({ isEditData: false })
    //       );
    //       alert("Record Added successfully");
    //     }
    //     console.log(res);
    //     if (!res?.data.success) {
    //       // <CustomizedDialogs
    //       //   open={showDialog}
    //       //   setShowDialog={setShowDialog}
    //       //   err={res?.data?.message}
    //       // />;
    //       console.log("error", res);
    //       alert("res?.data?.message");
    //       // setShowDialog(true);
    //     }
    //   })
    //   .catch((err) => {
    //     if (!err?.response?.data?.success) {
    //       // setShowDialog(true);
    //       // <CustomizedDialogs
    //       //   showDialog={true}
    //       //   setShowDialog={setShowDialog}
    //       //   err={err?.response?.data?.message}
    //       // />;
    //       alert(err?.response?.data?.message);
    //     }
    //     // console.log("err", err);
    //     // console.log("err", err?.response?.data?.message);
    //   });

    dispatch(
      setAuditForm({
        data: input,
        logo: image,
        inheritancePic: inheritancePic,
        socialMediaPic: socialMediaPic,
      })
    );
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChangePanel("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            Main Page (Page1)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
          <Paper sx={{ padding: "10px" }} elevation={6}>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "20px", width: "60%", margin: "auto" }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  name="companyName"
                  label="Name of the Company"
                  value={input?.companyName}
                  onChange={handleChange}
                  error={input?.companyName === ""}
                  helperText={input?.companyName === "" ? "Required!" : " "}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload logo +
                  <input
                    hidden
                    name="logo"
                    onChange={handleImage}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>

              <Grid item xs={12} md={6}>
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Inheritance Image +
                  <input
                    hidden
                    name="inheritancePic"
                    onChange={handleInheritanceaPic}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="description"
                  label="Project Description"
                  value={input?.description}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChangePanel("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            OVERVIEW
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper sx={{ padding: "10px" }}>
            <Grid sx={{ width: "80%", margin: "auto" }} container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Audit Result
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      error={input?.auditResult === ""}
                      helperText={input?.auditResult === "" ? "Required!" : " "}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.auditResult}
                      label="Audit Result"
                      name="auditResult"
                      onChange={handleChange}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      KYC Verification
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.kyc}
                      label="KYC Verification"
                      name="kyc"
                      onChange={handleChange}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Risk</InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.risk}
                      label="Risk"
                      name="risk"
                      onChange={handleChange}
                    >
                      <MenuItem value={"High"}>High</MenuItem>
                      <MenuItem value={"Moderate"}>Moderate </MenuItem>
                      <MenuItem value={"Low"}>Low </MenuItem>
                      <MenuItem value={"No"}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChangePanel("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            CONTRACT DETAILS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}

          <Paper sx={{ padding: "15px" }}>
            <Grid sx={{ width: "60%", margin: "auto" }} container spacing={2}>
              <Grid item xs={3} md={3}>
                <TextField
                  name="tokenName"
                  label="Token Name"
                  value={input?.tokenName}
                  onChange={handleChange}
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="tokenType"
                  label="Token Type"
                  value={input?.tokenType}
                  onChange={handleChange}
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="tokenSymbol"
                  label="Token Symbol"
                  value={input?.tokenSymbol}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={3} md={3}>
                <TextField
                  name="network"
                  label="Network"
                  value={input?.network}
                  onChange={handleChange}
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="language"
                  label="Language"
                  value={input?.language}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="address"
                  label="Address"
                  value={input?.address}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="totalSupply"
                  label="Total Supply"
                  value={input?.totalSupply}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="compiler"
                  label="Compiler"
                  value={input?.compiler}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="optimizationEnabled"
                  label="Optimization Enabled"
                  value={input?.optimizationEnabled}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="sha256Checksum"
                  label="SHA-256 Checksum"
                  value={input?.sha256Checksum}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="ownerWallet"
                  label="Owner's Wallet"
                  value={input?.ownerWallet}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="deployerWallet"
                  label="Deployer's Wallet"
                  value={input?.deployerWallet}
                  onChange={handleChange}
                  // inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChangePanel("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            FUNCTION OVERVIEW
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}

          <Paper sx={{ padding: "15px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Can Take Back Ownership
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.canTakeBackOwnership}
                      label="Can Take Back Ownership"
                      name="canTakeBackOwnership"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Owner Change Balance
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.ownerChangeBalance}
                      label="Owner Change Balance"
                      name="ownerChangeBalance"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Blacklist
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.blacklist}
                      label="Blacklist"
                      name="blacklist"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Modify Fees
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.ModifyFees}
                      label="Modify Fees"
                      name="ModifyFees"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Proxy</InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.Proxy}
                      label="Proxy"
                      name="Proxy"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Whitelisted
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.Whitelisted}
                      label="Whitelisted"
                      name="Whitelisted"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Anti Whale
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.AntiWhale}
                      label="Anti Whale"
                      name="AntiWhale"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Trading Cooldown
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.TradingCooldown}
                      label="Trading Cooldown"
                      name="TradingCooldown"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Transfer Pausable
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.TransferPausable}
                      label="Transfer Pausable"
                      name="TransferPausable"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Cannot Sell All
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.CannotSellAll}
                      label="Cannot Sell All"
                      name="CannotSellAll"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Hidden Owner
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.HiddenOwner}
                      label="Hidden Owner"
                      name="HiddenOwner"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Mint</InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.Mint}
                      label="Mint"
                      name="Mint"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Detected"}>Detected</MenuItem>
                      <MenuItem value={"Not Detected"}>Not Detected </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChangePanel("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            VULUNERABILITY CHECKLIST
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper sx={{ padding: "15px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Race Conditions
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.RaceConditions}
                      label="Race Conditions"
                      name="RaceConditions"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Delay In Data Delivery
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.DelayInDataDelivery}
                      label="Delay In Data Delivery"
                      name="DelayInDataDelivery"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Oracle Calls
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.OracleCalls}
                      label="Oracle Calls"
                      name="OracleCalls"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Front Running
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.FrontRunning}
                      label="Front Running"
                      name="FrontRunning"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      DoS With Revert
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.revert}
                      label="DoS With Revert"
                      name="revert"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      DoS With Block Gas Limit
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.blockGasLimit}
                      label="DoS With Block Gas Limit"
                      name="blockGasLimit"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Methods Execution Permissions
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.methodExePermission}
                      label="Methods Execution Permissions"
                      name="methodExePermission"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Economy Model
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.ecoModel}
                      label="Economy Model"
                      name="ecoModel"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Impact of the Exchange Rate On the Logic
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.exchangeRateImpact}
                      label="Impact of the Exchange Rate On the Logic"
                      name="exchangeRateImpact"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Malicious Event Log
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.maliciousLog}
                      label="Malicious Event Log"
                      name="maliciousLog"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Scoping And Declarations
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.scoping}
                      label="Scoping And Declarations"
                      name="scoping"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Uninitialized Storage Pointer
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.storagePointer}
                      label="Uninitialized Storage Pointer"
                      name="storagePointer"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Arithmatic Accuracy
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.arithmatic}
                      label="Arithmatic Accuracy"
                      name="arithmatic"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Cross Function Race Condition
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.racecond}
                      label="Cross Function Race Condition"
                      name="racecond"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Safe Zeppelin Module
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.zeppelinModule}
                      label="Safe Zeppelin Module"
                      name="zeppelinModule"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: 80 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Fallback Function Security
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.fallbackFn}
                      label="Fallback Function Security"
                      name="fallbackFn"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Passed"}>Passed</MenuItem>
                      <MenuItem value={"Not Passed"}>Not Passed </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChangePanel("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            Social Media Profiles
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper>
            <Grid container spacing={2} sx={{ width: "60%", margin: "auto" }}>
              <Grid item xs={12} md={3}>
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload social Media Image +
                  <input
                    hidden
                    name="socialMediaPic"
                    onChange={handleSocialMediaPic}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="weblink"
                  label="Web Link"
                  value={input?.weblink}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={3} md={3}>
                <TextField
                  name="twitterLink"
                  label="Twitter Link"
                  value={input?.twitterLink}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3} md={3}>
                <TextField
                  name="telegramLink"
                  label="Telegram Link"
                  value={input?.telegramLink}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChangePanel("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            FINDINGS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
          <Paper sx={{ padding: "15px" }}>
            <Grid container spacing={2} sx={{ width: "60%", margin: "auto" }}>
              <Grid item xs={12} md={3}>
                <TextField
                  name="highriskfinding"
                  label="High Risk Findings"
                  onChange={handleChange}
                  value={input?.highriskfinding}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="criticalRiskFinding"
                  label="Critical Risk Findings"
                  onChange={handleChange}
                  value={input?.criticalRiskFinding}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  type="number"
                  name="lowriskfinding"
                  label="Medium Risk Findings"
                  onChange={handleChange}
                  value={input?.lowriskfinding}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  type="number"
                  name="mediumriskfinding"
                  label="Low Risk Findings"
                  onChange={handleChange}
                  value={input?.mediumriskfinding}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  type="number"
                  name="suggestion"
                  label="Suggestions & discussion"
                  onChange={handleChange}
                  value={input?.suggestion}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  type="number"
                  name="gas"
                  label="Gas Optimizations"
                  onChange={handleChange}
                  value={input?.gas}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  name="highriskDetails"
                  label="Finding highrisk Details"
                  value={input?.highriskDetails}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="criticalRiskDetails"
                  label="Critical Risk Details"
                  value={input?.criticalRiskDetails}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="lowriskDetails"
                  label="Finding Low Risk Details"
                  value={input?.lowriskDetails}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="mediumriskDetails"
                  label="Finding Medium Risk Details"
                  value={input?.mediumriskDetails}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="suggestionDetails"
                  label="Finding Suggestion Details"
                  value={input?.suggestionDetails}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="gasDetails"
                  label="Finding Gas Details"
                  value={input?.gasDetails}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <h2>Images of Critical Risk Finding</h2>
              </Grid>

              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                  disabled
                >
                  Upload Critical Image +
                  <input
                    hidden
                    name="criticalImage"
                    onChange={handleImage}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 1 +
                  <input
                    hidden
                    name="criticalImage1"
                    onChange={handleCriticalImage1}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 2 +
                  <input
                    hidden
                    name="criticalImage2"
                    onChange={handleCriticalImage2}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 3 +
                  <input
                    hidden
                    name="criticalImage3"
                    onChange={handleCriticalImage3}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 4 +
                  <input
                    hidden
                    name="criticalImage4"
                    onChange={handleCriticalImage4}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 5 +
                  <input
                    hidden
                    name="criticalImage5"
                    onChange={handleCriticalImage5}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 6 +
                  <input
                    hidden
                    name="criticalImage6"
                    onChange={handleCriticalImage6}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 7 +
                  <input
                    hidden
                    name="criticalImage7"
                    onChange={handleCriticalImage7}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image 8 +
                  <input
                    hidden
                    name="criticalImage8"
                    onChange={handleCriticalImage8}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <input type="file" onChange={handleChange} /> */}
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  component="label"
                >
                  Upload Critical Image +
                  <input
                    hidden
                    name="criticalImage1"
                    onChange={handleCriticalImage1}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  {/* {input?.logo && <img src={URL.createObjectURL(input?.logo)} alt="Preview" />} */}
                  {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChangePanel("panel8")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            FEATURE & TOOLS USED
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
          <Paper sx={{ padding: "15px" }}>
            <Grid container spacing={2} sx={{ width: "60%", margin: "auto" }}>
              <Grid item xs={12} md={3}>
                <TextField
                  name="featureHead1"
                  label="Feature's Heading One"
                  onChange={handleChange}
                  value={input?.featureHead1}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="featureDesc1"
                  label="Feature's Description One"
                  onChange={handleChange}
                  value={input?.featureDesc1}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="featureHead2"
                  label="Feature's Heading Two"
                  onChange={handleChange}
                  value={input?.featureHead2}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="featureDesc2"
                  label="Feature's Description Two"
                  onChange={handleChange}
                  value={input?.featureDesc2}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="featureHead3"
                  label="Feature's Heading Three"
                  onChange={handleChange}
                  value={input?.featureHead3}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="featureDesc3"
                  label="Feature's Description Three"
                  onChange={handleChange}
                  value={input?.featureDesc3}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="featureHead4"
                  label="Feature's Heading Four"
                  onChange={handleChange}
                  value={input?.featureHead4}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  name="featureDesc4"
                  label="Feature's Description Four"
                  onChange={handleChange}
                  value={input?.featureDesc4}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="manualReview"
                  label="Manual Review "
                  onChange={handleChange}
                  value={input?.manualReview}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="tool1"
                  label="Tools Used one"
                  onChange={handleChange}
                  value={input?.tool1}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="tool2"
                  label="Tools Used Two"
                  onChange={handleChange}
                  value={input?.tool2}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="tool3"
                  label="Tools Used Three"
                  onChange={handleChange}
                  value={input?.tool3}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="tool4"
                  label="Tools Used Four"
                  onChange={handleChange}
                  value={input?.tool4}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="tool5"
                  label="Tools Used Five"
                  onChange={handleChange}
                  value={input?.tool5}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="tool6"
                  label="Tools Used Six"
                  onChange={handleChange}
                  value={input?.tool6}
                />
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChangePanel("panel9")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            SUMMARY
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper sx={{ padding: "15px" }}>
            <Grid container spacing={2} sx={{ width: "60%", margin: "auto" }}>
              <Grid item xs={12} md={3}>
                <TextField
                  name="summary"
                  label="Summary(Saperated With ,)"
                  onChange={handleChange}
                  value={input?.summary}
                />
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChangePanel("panel10")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "green", fontWeight: "bold" }}>
            FUNCTIONAL TESTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper sx={{ padding: "15px" }}>
            <Grid container spacing={2} sx={{ width: "90%", margin: "auto" }}>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest1"
                  label="Functional Test1"
                  onChange={handleChange}
                  value={input?.fnTest1}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Functional Test 1
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      error={input?.fnTest1Passed === ""}
                      helperText={
                        input?.fnTest1Passed === "" ? "Required!" : " "
                      }
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.fnTest1Passed}
                      label="Test 1 Passed"
                      name="fnTest1Passed"
                      onChange={handleChange}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest1Desc"
                  label="Functional Test1 Description"
                  onChange={handleChange}
                  value={input?.fnTest1Desc}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest2"
                  label="Functional Test2"
                  onChange={handleChange}
                  value={input?.fnTest2}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Functional Test 2
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      // error={input?.fnTest2Passed === ""}
                      // helperText={input?.fnTest2Passed === "" ? "Required!" : " "}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.fnTest2Passed}
                      label="Test 2 Passed"
                      name="fnTest2Passed"
                      onChange={handleChange}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest2Desc"
                  label="Functional Test2 Description"
                  onChange={handleChange}
                  value={input?.fnTest2Desc}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest3"
                  label="Functional Test3"
                  onChange={handleChange}
                  value={input?.fnTest3}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Functional Test 3
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      // error={input?.fnTest2Passed === ""}
                      // helperText={input?.fnTest2Passed === "" ? "Required!" : " "}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.fnTest3Passed}
                      label="Test 3 Passed"
                      name="fnTest3Passed"
                      onChange={handleChange}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest3Desc"
                  label="Functional Test3 Description"
                  onChange={handleChange}
                  value={input?.fnTest3Desc}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest4"
                  label="Functional Test4"
                  onChange={handleChange}
                  value={input?.fnTest4}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Functional Test 4
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      // error={input?.fnTest2Passed === ""}
                      // helperText={input?.fnTest2Passed === "" ? "Required!" : " "}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.fnTest4Passed}
                      label="Test 4 Passed"
                      name="fnTest4Passed"
                      onChange={handleChange}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest4Desc"
                  label="Functional Test4 Description"
                  onChange={handleChange}
                  value={input?.fnTest4Desc}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest5"
                  label="Functional Test5"
                  onChange={handleChange}
                  value={input?.fnTest5}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Functional Test 5
                    </InputLabel>
                    <Select
                      sx={{ width: "14em" }}
                      // error={input?.fnTest2Passed === ""}
                      // helperText={input?.fnTest2Passed === "" ? "Required!" : " "}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input?.fnTest5Passed}
                      label="Test 5 Passed"
                      name="fnTest5Passed"
                      onChange={handleChange}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  name="fnTest5Desc"
                  label="Functional Test5 Description"
                  onChange={handleChange}
                  value={input?.fnTest5Desc}
                />
              </Grid>
            </Grid>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          {isEdit ? (
            <Button
              sx={{ padding: "5px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Update
            </Button>
          ) : (
            <Button
              sx={{ padding: "5px" }}
              variant="contained"
              onClick={handleAdd}
            >
              Submit
            </Button>
          )}
        </Grid>
      </Grid>

      <div>
        Pdf report
        <AuditReport />
        {/* <PDFDownloadLink document={<PdfReport />} fileName="example.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink> */}
        {/* <PdfReport /> */}
      </div>
    </div>
  );
}
