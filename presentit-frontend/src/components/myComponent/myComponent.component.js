import React, {useRef, useEffect, useState} from 'react';

import { CanvasStyle } from './myComponent.styles';

const MyComponent = () => {
  
  let [pageIsRendering, setPageIsRendering] = useState(false);
  let [pageNum, setPageNum] = useState(1);
  let [pdfDoc, setPdfDoc] = useState(null);
  // let pdfDoc = null;
  let [ctx, setCTX] = useState(null);
  let canvas = useRef(null);
  let [pageNumIsPending, setPageNumIsPending] = useState(null);
  let goFull = useRef(null);

  const pdfjsLib = window.pdfjsLib;

  const renderPage = num => {
    setPageIsRendering(true);
    console.log('lashjafgjklgdslfkgjldsljkadgjasdfkjldgj\n\n\n');
    // Get page
    console.log(pdfDoc)
    
    pdfDoc.getPage(num).then(page => {  
      // Set scale
      const viewport = page.getViewport({ scale : 1.5 });
      console.log(ctx)
      // console.log(ctx)
      canvas.current.height = viewport.height;
      canvas.current.width = viewport.width;
  
      const renderCtx = {
        canvasContext: ctx,
        viewport
      };
  
      page.render(renderCtx).promise.then(() => {
        setPageIsRendering(false);
  
        if (pageNumIsPending !== null) {
          renderPage(pageNumIsPending);
          pageNumIsPending = null;
        }
      });
  
      // Output current page
      document.querySelector('#page-num').textContent = num;
    })
    .catch(error => {
      console.log(error)
    });
  }

  const fullScreen = (element) => {
    console.log(document.fullscreenElement,
      document.webkitFullscreenElement,
      document.mozFullScreenElement,
      document.msFullscreenElement)
    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        console.log('hey');
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        console.log(goFull.current)
        window.hola = goFull.current;
        if (goFull.current.requestFullscreen) {
          goFull.current.requestFullscreen();
        } else if (goFull.current.mozRequestFullScreen) {
          goFull.current.mozRequestFullScreen();
        } else if (goFull.current.webkitRequestFullscreen) {
          goFull.current.webkitRequestFullscreen(goFull.current.ALLOW_KEYBOARD_INPUT);
        } else if (goFull.current.msRequestFullscreen) {
          goFull.current.msRequestFullscreen();
        }
      }
}

  useEffect(() => {
      setCTX(canvas.current.getContext('2d'))

      // console.log(pdfjsLib);

      pdfjsLib.getDocument(`${process.env.REACT_APP_BACK_END_ROUTE}/drive/pdf`).promise.then((remotePdfDoc) => {
        // console.log('buuu\n\n');
        // console.log(remotePdfDoc);
        setPdfDoc(remotePdfDoc);
        // pdfDoc = remotePdfDoc;
        // console.log(pdfDoc)
      })
  }, []);


  useEffect(() => {
    console.log('hey PUTA '  + pageNum)
    console.log(pdfDoc)
    if(pdfDoc){
      renderPage(pageNum);
    }
  }, [ctx, pdfDoc])

  const queueRenderPage = num => {
    if (pageIsRendering) {
      pageNumIsPending = num;
    } else {
      renderPage(num);
    }
  };
  
  // Show Prev Page
  const showPrevPage = () => {
    if (pageNum <= 1) {
      return;
    }
    setPageNum(pageNum - 1);
    queueRenderPage(pageNum);
  };
  
  // Show Next Page
  const showNextPage = (pdfDoc) => {
    console.log('\n\nheyyyy');
    console.log(pdfDoc);
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    setPageNum(pageNum + 1);
    queueRenderPage(pageNum);
  };

  return(
    <div ref={goFull}>
      <CanvasStyle ref={canvas} onClick={fullScreen}>
      </CanvasStyle>
      <button onClick={() => showPrevPage(pdfDoc)}>Left</button>
      <button onClick={() => showNextPage(pdfDoc)}>Right</button>
    </div>  
  )

};

export default MyComponent;

