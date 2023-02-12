// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

// import ComponentToPrint from './TestReport';

// export const Example = () => {
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   return (
//     <div>
//       <ComponentToPrint ref={componentRef} />
//       <button onClick={handlePrint}>Print this out!</button>
//     </div>
//   );
// };
// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

// import ComponentToPrint from './TestReport';

// export const Example = React.forwardRef((props, ref) => {
//     const componentRef = useRef(ComponentToPrint);
//     const handlePrint = useReactToPrint({
//       content: () => componentRef.current,
//     })

//   return (
//     <div>
//       <ComponentToPrint ref={ref} />
//       <button onClick={handlePrint}>Print this out!</button>
//     </div>
//   );
// });

// export default Example;
import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <button onClick={downloadPdfDocument}>Download Pdf</button>

}

export default GenericPdfDownloader;