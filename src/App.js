import { Route, Routes } from "react-router-dom";
import AuditReport from "./components/AuditReportForm/AuditReport";
import AuditReportForm from "./components/AuditReportForm/AuditReportForm";
import CustomizedAccordions from "./components/AuditReportForm/AuditReportFormAccordian";
import GenericPdfDownloader from "./components/AuditReportForm/PrintPdf";
// import { Example } from "./components/AuditReportForm/PrintPdf";
import TestReport from "./components/AuditReportForm/TestReport";
import CustomizedTables from "./components/auditTable/AuditTable";
import DragAndDrop from "./components/dragAndDrop/DragAndDrop";
import LeftContainer from "./components/leftContainer/LeftContainer";
import ResponsiveAppBar from "./components/navbar/Navbar";
//font

// import "../public/font/GOTHIC.TTF"
import "./font/GOTHIC.TTF"
// import "./components/font/GOTHICB.TTF"
function App() {
  return (
    <>
      {/* <LeftContainer />
      <DragAndDrop /> */}

      {/* <AuditReportForm/> */}
      <ResponsiveAppBar />

      <Routes>
        <Route exact path="/" element={<CustomizedTables />} />
        <Route exact path="/auditform" element={<CustomizedAccordions />} />
      </Routes>
      {/* <CustomizedAccordions/> */}
      {/* <TestReport/> */}
      {/* <TestReport/> */}
      <br />

      {/* <AuditReport/> */}
    </>
  );
}

export default App;
