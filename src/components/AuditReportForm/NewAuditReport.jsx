import AuditReport from "./AuditReport";
import { Document, Link, Page, Text, View } from "@react-pdf/renderer";

function MyPDF() {
    return (
      <Document>
        <Page>
            
          <AuditReport  />
        </Page>
      </Document>
    );
  }
  export {MyPDF}