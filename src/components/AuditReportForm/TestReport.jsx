import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';
import GenericPdfDownloader from './PrintPdf';
function TestReport() {

    // const exportPdf = () => {
    //     const elements = document.querySelectorAll('#page');
    //     const pdf = new jsPDF('p', 'mm', 'a4');
    
    //     elements.forEach((element, index) => {
    //       html2canvas(element,
    //         // {scale:5}
    //         // {width: pdf.internal.pageSize.getWidth(),
    //         //     height: pdf.internal.pageSize.getHeight()}
    //         //  { width: element.clientWidth * 10 ,height: element.clientWidth * 2 }
    //          ).then((canvas)=> {

    //         const imgData = canvas.toDataURL('image/png');
    //         pdf.addImage(imgData, 'PNG', 0, 0);
    
    //         if (index < elements.length - 1) {
    //           pdf.addPage();
    //         } else {
    //             console.log("downloading")
    //           pdf.save("download.pdf");
    //         }
    //       });
    //     });
    //   };

    //      const exportPdf = () => {
    //     const elements = document.querySelectorAll('#capture');
    //     const pdf = new jsPDF('p', 'mm', 'a4');
    //     html2canvas(document.querySelector("#capture"),{scale:5}
    //     ).then(canvas => {
     
    //        document.body.appendChild(canvas);  // if you want see your screenshot in body.
    //        const imgData = canvas.toDataURL('image/png');
    //     //    const pdf = new jsPDF();
    //       // set the page format to A4

    //        pdf.addImage(imgData, 'PNG', 0, 0);
           
    //        pdf.save("download.pdf"); 
    //    });
   
    // }
    const exportPdf = () => {
        const element = document.querySelector("#capture");
        const rect = element.getBoundingClientRect();
        html2canvas(element, {
            
          width: rect.width*10,
          height: rect.height
        }).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save("download.pdf");
        });
      };
      
      
  return (
    <>
      <GenericPdfDownloader 
          downloadFileName="CustomPdf" 
          rootElementId="testId" 
        />
    <div style={{backgroundColor:"blue",width:"42.5%"}}   id='testId'>
        <p className='page'>
        Hi i am aman

        </p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
<Button variant='contained'>
left
</Button>
<Button variant='contained'>
Right
</Button>
        </div>
        <div style={{textAlign:"center"}} className='page'>
web developer jhcdskflsdjfsc dfikfhcsdjkcns csdjkbcsjdk cksmd csdjbcjsd czdmjb
        </div>
    </div>
<Button
variant='contained'
onClick={exportPdf}
>
    Doenload
</Button>
    </>
  )
}

export default TestReport