import AuditReport from "./components/AuditReportForm/AuditReport";
import AuditReportForm from "./components/AuditReportForm/AuditReportForm";
import GenericPdfDownloader from "./components/AuditReportForm/PrintPdf";
// import { Example } from "./components/AuditReportForm/PrintPdf";
import TestReport from "./components/AuditReportForm/TestReport";
import DragAndDrop from "./components/dragAndDrop/DragAndDrop";
import LeftContainer from "./components/leftContainer/LeftContainer";

function App() {
  return (
    <>
      {/* <LeftContainer />
      <DragAndDrop /> */}

      <AuditReportForm/>
{/* <TestReport/> */}
{/* <TestReport/> */}
      <br/>

      <AuditReport/>
    </>
  );
}

export default App;
