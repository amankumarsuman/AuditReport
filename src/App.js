import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import FormWithImages from "./components/AuditReportForm/AuditFormWithImages";
import AuditReport from "./components/AuditReportForm/AuditReport";
import AuditReportForm from "./components/AuditReportForm/AuditReportForm";
import CustomizedAccordions from "./components/AuditReportForm/AuditReportFormAccordian";
import PdfReport from "./components/AuditReportForm/PdfWithLink";
import GenericPdfDownloader from "./components/AuditReportForm/PrintPdf";
// import { Example } from "./components/AuditReportForm/PrintPdf";
import TestReport from "./components/AuditReportForm/TestReport";
import CustomizedTables from "./components/auditTable/AuditTable";
import DragAndDrop from "./components/dragAndDrop/DragAndDrop";
import LeftContainer from "./components/leftContainer/LeftContainer";
import Login from "./components/login/Login";
import ResponsiveAppBar from "./components/navbar/Navbar";
//font

// import "../public/font/GOTHIC.TTF"
import "./font/GOTHIC.TTF";
// import "./components/font/GOTHICB.TTF"
function App() {
  const ReduxStoredData = useSelector((state) => state.publisher?.auditData);
  const logo = useSelector((state) => state.publisher?.logo);
  const socialMediaPic = useSelector(
    (state) => state.publisher?.socialMediaLogo
  );
  const inheritancePic = useSelector(
    (state) => state.publisher?.inheritancePic
  );
  return (
    <>
      {/* <LeftContainer />
      <DragAndDrop /> */}

      {/* <AuditReportForm/> */}
      <ResponsiveAppBar />
      {/* <Login /> */}
      {/* <FormWithImages /> */}
      <Routes>
        <Route exact path="/dashboard" element={<CustomizedTables />} />
        <Route path="/" element={<Login />} />
        <Route exact path="/auditform" element={<CustomizedAccordions />} />
        <Route exact path="testing" element={<FormWithImages />} />
      </Routes>
      {/* <PDFDownloadLink
        document={
          <PdfReport
            ReduxStoredData={ReduxStoredData}
            logo={logo}
            socialMediaPic={socialMediaPic}
            inheritancePic={inheritancePic}
          />
        }
        fileName="example.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink> */}
      {/* <CustomizedAccordions/> */}
      {/* <TestReport/> */}
      {/* <TestReport/> */}
      <br />

      {/* <AuditReport/> */}
    </>
  );
}

export default App;
