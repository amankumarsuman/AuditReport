// import React from 'react'
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
// import AddModeratorIcon from '@mui/icons-material/AddModerator';

// import DateRangeIcon from '@mui/icons-material/DateRange';
// import expelee from "../assets/expe.png"
// import background1 from "../assets/background1.png"
// import styles from "./auditReport.module.css";
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { Button } from '@mui/material';
// import { minHeight } from '@mui/system';
// function AuditReport() {

//     const ReduxStoredData = useSelector(
//         (state) => state.publisher?.auditData
       
//       );
//       const logo = useSelector(
//         (state) => state.publisher?.logo
        
//       );
//       const [companyName, setCompanyName] = useState(ReduxStoredData);
// //working
//     //   const exportPdf = () => {
//     //     const elements = document.querySelectorAll('#page');
//     //     const pdf = new jsPDF();
//     //     html2canvas(document.querySelector("#capture")
//     //     ).then(canvas => {
     
//     //        document.body.appendChild(canvas);  // if you want see your screenshot in body.
//     //        const imgData = canvas.toDataURL('image/png');
//     //     //    const pdf = new jsPDF();
//     //       // set the page format to A4

//     //        pdf.addImage(imgData, 'PNG', 0, 0);
           
//     //        pdf.save("download.pdf"); 
//     //    });
   
//     // }


//     const exportPdf = () => {
//         const elements = document.querySelectorAll('#page');
//         const pdf = new jsPDF();
    
//         elements.forEach((element, index) => {
//           html2canvas(element).then(canvas => {
//             const imgData = canvas.toDataURL('image/png');
//             pdf.addImage(imgData, 'PNG', 0, 0);
    
//             if (index < elements.length - 1) {
//               pdf.addPage();
//             } else {
//               pdf.save("download.pdf");
//             }
//           });
//         });
//       };

//     //   const exportPdf = () => {
//     //     const pdf = new jsPDF();
//     //     html2canvas(document.querySelector("#capture"),{
//     //     width: pdf.internal.pageSize.getWidth()*10,
//     //     height: pdf.internal.pageSize.getHeight()}
//     //     ).then(canvas => {
     
//     //        document.body.appendChild(canvas);  // if you want see your screenshot in body.
//     //        const imgData = canvas.toDataURL('image/png');
//     //     //    const pdf = new jsPDF();
//     //       // set the page format to A4

//     //        pdf.addImage(imgData, 'PNG', 0, 0);
//     //        pdf.save("download.pdf"); 
//     //    });
   
//     // }
//   return (
//     <>

//     <div id="capture">

//     <div id="page" className={styles.divOne} 
  
          
//           >
//             <div
//               style={{ textAlign: "center"}}
//             >
//               <img width="50%" style={{marginTop:"300px"}} src={expelee} />
//             </div>

//             <div style={{ textAlign: "center" }}>
//               <span style={{
//                 color: "white",
//                 fontSize: "30px",
//                 fontWeight: "bold"
//               }}>
//                 Building the Futuristic
//               </span>
              
//               <span
//                 style={{
//                   color: "#F56C0C",
//                   fontSize: "30px",
//                   fontWeight: "bold",
//                   marginLeft:"10px"
//                 }}
//               >

//                 Blockchain Ecosystem
//               </span>
//             </div>

//             <div
//               style={{
//                 color: "white",
//                 fontSize: "50px",
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 marginTop: "150px"
//               }}
//             >
//               Security Audit Report
//             </div>

//             <div
//               style={{
//                 color: "white",
//                 fontSize: "50px",
//                 fontWeight: "bold",
//                 textAlign: "center"
//               }}
//             >
//               For
//             </div>

//             <div style={{ textAlign: "center", marginTop: "30px" }}>
//               {logo && <img style={{ height: "300px", width: "300px", borderRadius: "50%" }} src={URL.createObjectURL(logo)} alt="Uploaded Image" />}
//             </div>
//             <div
//               style={{
//                 color: "yellow",
//                 fontSize: "50px",
//                 fontWeight: "bold",
//                 textAlign: "center",

//               }}
//             >
//               {ReduxStoredData?.companyName}
//             </div>
//             {/* <div>page 1</div> */}
//           </div>


//           <div  id="page" className={styles.backgroundTwo}>
//             <div
//               style={{
//                 fontSize: "40px",
//                 color: "#454545",
//                 textAlign: "center",
//                 // marginTop:"150px",
                


//               }}
//             >
//               {/* <h1 style={{paddingTop:"110px"}}>OVERVIEW</h1> */}
//               <h1 style={{paddingTop:"110px"}}>OVERVIEW</h1>
//             </div>
//             <div
//               style={{
//                 fontSize: "25px",
//                 textAlign: "center",
//                 // color: "#343434",
//                 color:"#41484E",
//                 width:"80%",
//                 margin:"auto"
//               }}
//             >
//               The Expelee team has performed a line-by-line manual
//               analysis and automated review of the smart contract. The
//               smart contract was analysed mainly for common smart
//               contract vulnerabilities, exploits, and manipulation hacks.
//               According to the smart contract audit:

//             </div>
//             <div style={{ marginTop: "100px", paddingBottomBottom: "100px" }}>
//               <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
//                 <div style={{ border: "1px solid white", background:"#4A74ED", textAlign:"center", marginBottom:"15px", marginRight:"10px", width:"50%", borderRadius: "20px 0px 0px 0px", padding: "30px" }}>
//                   <span>
//                     <LibraryAddIcon sx={{ color: "white" }} />
//                   </span>
//                   <span style={{ color: "white", fontSize: "30px", marginLeft: "10px", }}>

//                     Audit Result 
//                   </span>
//                 </div>
//                 <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", borderRadius: "0px 20px 0px 0px", padding: "30px" }}>

//                   <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

//                     {ReduxStoredData?.auditResult ? <span style={{color:"green",fontWeight:"bold"}}>Passed</span>:<span style={{color:"red",fontWeight:"bold"}}> Failed</span>}

//                   </span>
//                 </div>
//               </div>
//               <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
//                 <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", marginRight:"10px",  borderRadius: "0px 0px 0px 0px", padding: "30px" }}>
//                   <span>
//                     <AddModeratorIcon sx={{ color: "white" }} />
//                   </span>
//                   <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

//                     KYC Verification

//                   </span>
//                 </div>
//                 <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", borderRadius: "0px 0px 0px 0px", padding: "10px" }}>

//                   <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

//                     {ReduxStoredData?.kyc ?<span style={{color:"green",fontWeight:"bold"}}> Done</span> :<span style={{color:"red",fontWeight:"bold"}}> Not Done</span>}
//                   </span>
//                 </div>
//               </div>
//               <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
//                 <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", marginRight:"10px", borderRadius: "0px 0px 0px 20px", padding: "30px" }}>
//                   <span>
//                     <DateRangeIcon sx={{ color: "white" }} />
//                   </span>
//                   <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

//                     Date
//                   </span>
//                 </div>
//                 <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", borderRadius: "0px 0px 20px 0px", padding: "10px" }}>
//                   {/* <span>
//                     <LibraryAddIcon sx={{ color: "white" }} />
//                   </span> */}
//                   <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

//                     {ReduxStoredData?.date ? ReduxStoredData?.date : new Date().toLocaleString() + ""}

//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div
//             style={{color:"black", fontSize:"40px",textAlign:"center",marginTop:"150px",fontWeight:"bold"}}
//             >
//             Audit Passed With <span style={{color:`${ReduxStoredData?.risk==="No"?"green":ReduxStoredData?.risk==="Low"?"#98fb98":ReduxStoredData?.risk==="Moderate"?"yellow":ReduxStoredData?.risk==="High"?"red":null}`}}>
//             {ReduxStoredData?.risk?ReduxStoredData?.risk:"No"}
//               </span>  Risk

//             </div>
//             <div
//             style={{color:"black", fontSize:"30px",textAlign:"center",marginTop:"20px",fontWeight:"bold"}}
//             >
//                 - Team Expelee
//             </div>

//           </div>

//           <div
//           id='page'
//           className={styles.backgroundTwo}
//           >
//  <div
//               style={{
//                 fontSize: "80px",
//                 color: "#454545",
//                 textAlign: "center",
//                 // marginTop:"150px",
                


//               }}
//             >
//               <h1 style={{paddingTop:"220px"}}>PROJECT</h1>
            
//             </div>
//  <div>

//  </div>
//           </div>
//     </div>

//     <Button
//     variant='contained'
//     onClick={exportPdf}
//     >
//         Download Pdf
//     </Button>
//     </>
//   )
// }

// export default AuditReport
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import LanguageIcon from "@mui/icons-material/Language";
import DateRangeIcon from "@mui/icons-material/DateRange";
import expelee from "../assets/expe.png";
import background1 from "../assets/background1.png";
import styles from "./auditReport.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { padding } from "@mui/system";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Button, Grid, TextField } from "@mui/material";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import auditMethodology from "../assets/1.png"
import second from "../assets/2.png"
import third from "../assets/3.png"
import fourth from "../assets/4.png"
import expeWeb from "../assets/expeWeb.jpg"
import overview from "../assets/two.png"
function AuditReport() {
  const ReduxStoredData = useSelector((state) => state.publisher?.auditData);
  const logo = useSelector((state) => state.publisher?.logo);
  const [companyName, setCompanyName] = useState(ReduxStoredData);
    const exportPdf = () => {
        const elements = document.querySelectorAll('#page');
        const pdf = new jsPDF('p', 'mm', 'a4');
    
        elements.forEach((element, index) => {
          html2canvas(element,
            // {scale:5}
            // {width: pdf.internal.pageSize.getWidth(),
            //     height: pdf.internal.pageSize.getHeight()}
            //  { width: element.clientWidth * 10 ,height: element.clientWidth * 2 }
             ).then((canvas)=> {

            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0);
    
            if (index < elements.length - 1) {
              pdf.addPage();
            } else {
                console.log("downloading")
              pdf.save("download.pdf");
            }
          });
        });
      };
  return (
    <>
    <div style={{width:"100%"}} id="capture">
    {/* <div style={{width:"83%",height:"100%"}} id="capture"> */}
   
   
    <div id="page" className={styles.divOne}>
        <div style={{ textAlign: "center",  }}>
          <img  width="50%" style={{marginTop:"100px"}}  src={expelee} />
        </div>

        <div style={{ textAlign: "center"}}>
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
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            // marginTop:"50px"
          }}
        >
          {ReduxStoredData?.companyName}
        </div>
        {/* <div>page 1</div> */}
      </div>

      {/* <div className={styles.overview} id="page">

<span
style={{marginLeft:"300px",paddingTop:"500px"}}
>

    {ReduxStoredData?.auditResult?"Passed":"Failed"}
</span>

      </div> */}


      <div style={{width:"650px"}}>
<div id="page" className={styles.backgroundTwo}>
<div  id="page" className={styles.backgroundTwo}>
          <div
              style={{
                fontSize: "40px",
                color: "#454545",
                textAlign: "center",
                // marginTop:"150px",
                


              }}
            >
              {/* <h1 style={{paddingTop:"110px"}}>OVERVIEW</h1> */}
              <h1 style={{paddingTop:"110px"}}>OVERVIEW</h1>
            </div>
            <div
              style={{
                fontSize: "25px",
                textAlign: "center",
                // color: "#343434",
                color:"#41484E",
                width:"80%",
                margin:"auto"
              }}
            >
              The Expelee team has performed a line-by-line manual
              analysis and automated review of the smart contract. The
              smart contract was analysed mainly for common smart
              contract vulnerabilities, exploits, and manipulation hacks.
              According to the smart contract audit:

            </div>
            <div style={{ marginTop: "100px", paddingBottomBottom: "100px" }}>
              <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                <div style={{ border: "1px solid white", background:"#4A74ED", textAlign:"center", marginBottom:"15px", marginRight:"10px", width:"50%", borderRadius: "20px 0px 0px 0px", padding: "30px" }}>
                  <span>
                    <LibraryAddIcon sx={{ color: "white" }} />
                  </span>
                  <span style={{ color: "white", fontSize: "30px", marginLeft: "10px", }}>

                    Audit Result 
                  </span>
                </div>
                <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", borderRadius: "0px 20px 0px 0px", padding: "30px" }}>

                  <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

                    {ReduxStoredData?.auditResult ? <span style={{color:"green",fontWeight:"bold"}}>Passed</span>:<span style={{color:"red",fontWeight:"bold"}}> Failed</span>}

                  </span>
                </div>
              </div>
              <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", marginRight:"10px",  borderRadius: "0px 0px 0px 0px", padding: "30px" }}>
                  <span>
                    <AddModeratorIcon sx={{ color: "white" }} />
                  </span>
                  <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

                    KYC Verification

                  </span>
                </div>
                <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", borderRadius: "0px 0px 0px 0px", padding: "10px" }}>

                  <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

                    {ReduxStoredData?.kyc ?<span style={{color:"green",fontWeight:"bold"}}> Done</span> :<span style={{color:"red",fontWeight:"bold"}}> Not Done</span>}
                  </span>
                </div>
              </div>
              <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", marginRight:"10px", borderRadius: "0px 0px 0px 20px", padding: "30px" }}>
                  <span>
                    <DateRangeIcon sx={{ color: "white" }} />
                  </span>
                  <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

                    Date
                  </span>
                </div>
                <div style={{ border: "1px solid white", width: "50%", background:"#4A74ED", textAlign:"center", marginBottom:"15px", width: "50%", borderRadius: "0px 0px 20px 0px", padding: "10px" }}>
                  {/* <span>
                    <LibraryAddIcon sx={{ color: "white" }} />
                  </span> */}
                  <span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>

                    {ReduxStoredData?.date ? ReduxStoredData?.date : new Date().toLocaleString() + ""}

                  </span>
                </div>
              </div>
            </div>
            <div
            style={{color:"black", fontSize:"40px",textAlign:"center",marginTop:"150px",fontWeight:"bold"}}
            >
            Audit Passed With <span style={{color:`${ReduxStoredData?.risk==="No"?"green":ReduxStoredData?.risk==="Low"?"#98fb98":ReduxStoredData?.risk==="Moderate"?"yellow":ReduxStoredData?.risk==="High"?"red":null}`}}>
            {ReduxStoredData?.risk?ReduxStoredData?.risk:"No"}
              </span>  Risk

            </div>
            <div
            style={{color:"black", fontSize:"30px",textAlign:"center",marginTop:"20px",fontWeight:"bold"}}
            >
                - Team Expelee
            </div>

          </div>

</div>
      </div>
<div style={{width:"650px",height:"100%"}}>

      <div id="page" className={styles.backgroundTwo}>
        {/* <div
        style={{textAlign:"end",marginTop:"10px"}}
        >
        <img  width="30%" src={expeWeb}/>

        </div> */}
        <div
        // id="page"
        // className={styles.backgroundTwo}
          style={{
            fontSize: "30px",
            color: "#454545",
            textAlign: "center",
            // marginTop:"150px",
            lineHeight: "0px",
          }}
        >
          <p
            style={{
              paddingTop: "160px",
              fontWeight: "bold",
              fontSize: "100px",
            }}
          >
            PROJECT
          </p>
          <p
            style={{
              paddingTop: "0",
              fontWeight: "bold",
              paddingBottom: "15px",
              fontSize: "60px",
            }}
          >
            DESCRIPTION
          </p>
          <p style={{ fontWeight: "bold", paddingTop: "0" }}>{ReduxStoredData?.companyName}</p>
        </div>

        <div style={{ paddingTop: "50px" }}>
          <p style={{ fontSize: "20px",width:"80%",margin:"auto" }}>
          {ReduxStoredData?.companyName} is a hyper-deflationary BEP-20 native token of the {ReduxStoredData?.companyName}
            Ecosystem, that opens numerous passive income streams & benefits to
            holders by offering BTC Reflection, Staking Rewards, Monthly Diamond
            Hand Rewards, Quarterly Revenue Distribution, BUSD Credit Facility,
            Investment Insurance at ProPAD, Farming & Cashback at ProDEX,
            several DeFi benefits to 8Bit NFT holders with flawless NFT trading
            at own NFT Marketplace, transparency & integrity through DAO
            Governance and many more.
          </p>
        </div>

        <div>
            {ReduxStoredData?.logo?
            
            <img
              style={{
                width: "200px",
                height: "200px",
                border: "5px solid black",
                padding: "10px",
                borderRadius: "50%",
                marginTop:"50px"
              }}
               src={URL.createObjectURL(logo)}
              alt="img"
            />:null
        }
        </div>
      </div>
</div>

<div style={{width:"650px",height:"100%"}}>

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

          <p style={{ fontWeight: "bold", paddingTop: "0" }}>{ReduxStoredData?.companyName}</p>

          <div>
            <img
              style={{ width: "70%", height: "70%" }}
              src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="img"
            />
          </div>
        </div>
        <div style={{ marginLeft: "70px" }}>

            {ReduxStoredData?.weblink?
            
          <a
            style={{ fontSize: "30px", fontWeight: "bold" }}
            href={ReduxStoredData?.weblink}
          >
            {" "}
            
            <LanguageIcon
              sx={{ color: "blue" }}
            /> {ReduxStoredData?.weblink}{" "}
          </a>:null
        }
          <br />

          {ReduxStoredData?.telegramLink?
          
          <a
            style={{ fontSize: "30px", fontWeight: "bold" }}
            href={ReduxStoredData?.telegramLink}
          >
            {" "}
            <TelegramIcon sx={{ color: "blue" }} />{" "}
            {ReduxStoredData?.telegramLink}
          </a>:null
        }
          <br />

          {ReduxStoredData?.twitterLink?
          
          <a
            style={{ fontSize: "30px", fontWeight: "bold" }}
            href={ReduxStoredData?.twitterLink}
          >
            {" "}
            <TwitterIcon sx={{ color: "blue" }} /> {ReduxStoredData?.twitterLink}
          </a>:null
        }
        </div>

        <div
          style={{
            color: "#454545",
            textAlign: "center",
            // marginTop:"150px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              color: "#454545",
              textAlign: "center",
              fontWeight: "bold",
              // lineHeight: "1px",
              paddingLeft: "100px",
              paddingRight: "60px",
            }}
          >
            It’s always good to check the social profiles of the project, before
            making your investment.
          </p>
          <p
            style={{
              fontSize: "60px",
              color: "#454545",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            -Team Expelee
          </p>
        </div>
      </div>
</div>
<div style={{width:"650px",height:"100%"}}>

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
              color: "blue",
            }}
          >
            CONTRACT DETAILS
          </p>
          <Grid
            container
            spacing={2}
            sx={{width:"80%",margin:"auto"}}
            // sx={{ paddingLeft: "100px", paddingRight: "100px" }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Token Name"
                value={ReduxStoredData?.tokenName}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Symbol"
                value={ReduxStoredData?.tokenSymbol}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Network"
                value={ReduxStoredData?.network}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Language"
                value={ReduxStoredData?.language}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contract Address (Verified)"
                value={ReduxStoredData?.address}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Token Type"
                value={ReduxStoredData?.tokenType}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Total Supply"
                value={ReduxStoredData?.totalSupply}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Compiler"
                value={ReduxStoredData?.compiler}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Optimization Enabled"
                value={ReduxStoredData?.optimizationEnabled}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contract SHA-256 Checksum:"
                value={ReduxStoredData?.sha256Checksum}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Owner's Wallet"
                value={ReduxStoredData?.ownerWallet}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Deployer's Wallet"
                value={ReduxStoredData?.deployerWallet}
                variant="standard"
              />
            </Grid>
          </Grid>
        </div>
      </div>
</div>
<div style={{width:"650px",height:"100%"}}>

      <div id="page" className={styles.backgroundTwoimg1}>
        <img style={{ marginTop: "100px" }} src="/1.png" alt="imh1" />
      </div>
      </div>
<div style={{width:"650px",height:"100%"}}>

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
              paddingTop: "90px",
              fontWeight: "bold",
              fontSize: "50px",
              color: "blue",
            }}
          >
            FUNCTION OVERVIEW
          </p>
        </div>
        <div style={{width:"90%",margin:"auto",marginTop:"-30px"}}>
          <Grid
            container
            sx={{
            
            //   backgroundColor: "black",
     
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                borderRadius: "0px 30px 0px 0px",
              }}
            >
                {ReduxStoredData?.canTakeBackOwnership?ReduxStoredData?.canTakeBackOwnership:"Not Detected"}
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
        {ReduxStoredData?.ownerChangeBalance?ReduxStoredData?.ownerChangeBalance:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
         {ReduxStoredData?.blacklist?ReduxStoredData?.blacklist:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.ModifyFees?ReduxStoredData?.ModifyFees:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.Proxy?ReduxStoredData?.Proxy:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.Whitelisted?ReduxStoredData?.Whitelisted:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.AntiWhale?ReduxStoredData?.AntiWhale:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.TradingCooldown?ReduxStoredData?.TradingCooldown:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.TransferPausable?ReduxStoredData?.TransferPausable:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.CannotSellAll?ReduxStoredData?.CannotSellAll:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.HiddenOwner?ReduxStoredData?.HiddenOwner:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "blue",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                borderRadius: "0px 0px 30px 0px",
              }}
            >
          {ReduxStoredData?.Mint?ReduxStoredData?.Mint:"Not Detected"}

            </Grid>
          </Grid>
        </div>
      </div>
</div>











{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    
{/* <div style={{width:"650px",height:"100%"}}>
    
      <div id="page" className={styles.backgroundTwo}>
        <div
          style={{
            // fontSize: "50px",
            // color: "#454545",
            // textAlign: "center",
            // marginTop:"150px",
            
          }}
        >
          <p
            style={{
              paddingTop: "100px",
            // marginTop:"100px",
              fontWeight: "bold",
              fontSize: "40px",
              color: "blue",
              textAlign:"center",
            }}
          >
            VULNERABILITY CHECKLIST
          </p>
        </div>
        <div 
        
        // style={{width:"80%",margin:"auto"}}
        >
          <Grid
            container
            sx={{
            
            //   backgroundColor: "blue",
     
            }}
          >
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                // fontSize: "30px",
                // fontWeight: "bold",
              
                // color: "white",
           
                // height: "70%",
                // borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
              Can Take Back Ownership
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
  color: "white",  
              }}
            >Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
              Owner Change Balance
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
              Blacklist
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
              Modify Fees
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
            Proxy
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
         Whitelisted
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
            Anti Whale
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
              Trading Cooldown
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
           Transfer Pausable
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
            Cannot Sell All
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "8%,8%",
              }}
            >
              Hidden Owner
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              
              Passed
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
              backgroundColor: "#262727",
                
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
               
                height: "70%",
          
                // borderRadius: "8%,8%",
              }}
            >
              Mint
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
              
                color: "white",
              }}
            >
              Passed
            </Grid>
          </Grid>
        </div>
      </div>
      </div> */}

<div style={{width:"650px",height:"100%"}}>

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
              paddingTop: "90px",
              fontWeight: "bold",
              fontSize: "40px",
              color: "blue",
            }}
          >
            VULNERABILITY CHECKLIST
          </p>
        </div>
        <div style={{width:"90%",margin:"auto",marginTop:"-30px"}}>
          <Grid
            container
            sx={{
            
            //   backgroundColor: "black",
     
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                borderRadius: "0px 30px 0px 0px",
              }}
            >
                {ReduxStoredData?.canTakeBackOwnership?ReduxStoredData?.canTakeBackOwnership:"Not Detected"}
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
        {ReduxStoredData?.ownerChangeBalance?ReduxStoredData?.ownerChangeBalance:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
         {ReduxStoredData?.blacklist?ReduxStoredData?.blacklist:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.ModifyFees?ReduxStoredData?.ModifyFees:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.Proxy?ReduxStoredData?.Proxy:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.Whitelisted?ReduxStoredData?.Whitelisted:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "20px 20px 0px 0px",
              }}
            >
            Delay In Data Delivery
            </Grid>
            <Grid
              item
           
              xs={6}
              sx={{
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.AntiWhale?ReduxStoredData?.AntiWhale:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.TradingCooldown?ReduxStoredData?.TradingCooldown:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.TransferPausable?ReduxStoredData?.TransferPausable:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.CannotSellAll?ReduxStoredData?.CannotSellAll:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
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
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                // borderRadius: "0px 20px 0px 0px",
              }}
            >
          {ReduxStoredData?.HiddenOwner?ReduxStoredData?.HiddenOwner:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                borderRadius: "0px 0px 0px 30px",
              }}
            >
              Methods Execution Permissions
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                borderRadius: "0px 0px 30px 0px",
              }}
            >
          {ReduxStoredData?.Mint?ReduxStoredData?.Mint:"Not Detected"}

            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#262727",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                borderRadius: "0px 0px 0px 30px",
              }}
            >
              Economy Model
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "black",
                fontSize:"10px",
                fontWeight: "bold",
              textAlign:"center",
                color: "white",
           padding:"15px",
                height: "70%",
                borderBottom: "5px solid white",
                borderRadius: "0px 0px 30px 0px",
              }}
            >
          {ReduxStoredData?.Mint?ReduxStoredData?.Mint:"Not Detected"}

            </Grid>
          </Grid>
        </div>
      </div>
</div>


      <div id="page">
<img width="50%" src={auditMethodology} />
      </div>
    
      <div id="page">
<img width="50%" src={third} />
      </div>
      <div id="page">
<img width="50%" src={fourth} />
      </div>
      <div id="page">
<img width="50%" src={second} />
      </div>
    </div>
    <Button
    variant='contained'
    onClick={exportPdf}
    >
        Download Pdf
    </Button>
    </>
  );
}

export default AuditReport;
