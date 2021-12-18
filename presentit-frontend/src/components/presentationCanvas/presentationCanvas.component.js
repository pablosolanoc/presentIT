import React, {useEffect, useState, useRef} from 'react';
import { connect } from 'react-redux';

import {CanvasStyle} from './presentationCanvas.styles';
import {setCurrentUser} from '../../redux/user/user.actions';

const PresentationCanvas = ({fileId, isPDF, setCurrentUser}) => {

    let [pageIsRendering, setPageIsRendering] = useState(false);
    let [pageNum, setPageNum] = useState(1);
    let [pdfDoc, setPdfDoc] = useState(null);

     // let pdfDoc = null;
    let [ctx, setCTX] = useState(null);
    let canvas = useRef(null);
    let [pageNumIsPending, setPageNumIsPending] = useState(null);
    // let goFull = useRef(null);
    const pdfjsLib = window.pdfjsLib;


    const renderPage = num => {
        setPageIsRendering(true);
        // console.log('lashjafgjklgdslfkgjldsljkadgjasdfkjldgj\n\n\n');
        // Get page
        // console.log(pdfDoc)
        
        pdfDoc.getPage(num).then(page => {  
          // Set scale
          const viewport = page.getViewport({ scale : 1.5 });
          // console.log(ctx)
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
          // document.querySelector('#page-num').textContent = num;
        })
        .catch(error => {
          console.error(error)
        });
      }

    const fullScreen = (element) => {

        element.stopPropagation();

        // console.log(document.fullscreenElement,
          // document.webkitFullscreenElement,
          // document.mozFullScreenElement,
          // document.msFullscreenElement)
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
          ) {
            // console.log('hey');
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
            // console.log(canvas.current)
            // window.hola = canvas.current;
          
    
    
            if (canvas.current.requestFullscreen) {
              canvas.current.requestFullscreen();
            } else if (canvas.current.mozRequestFullScreen) {
              canvas.current.mozRequestFullScreen();
            } else if (canvas.current.webkitRequestFullscreen) {
              canvas.current.webkitRequestFullscreen(canvas.current.ALLOW_KEYBOARD_INPUT);
            } else if (canvas.current.msRequestFullscreen) {
              canvas.current.msRequestFullscreen();
            }
          }
    }


    useEffect(() => {
        setCTX(canvas.current.getContext('2d'))
        // console.log(pdfjsLib);
    }, []);

    useEffect(() => {
      console.log({fileId, isPDF});

      let pdfFile = `?fileId=${fileId}&pdfFile=${isPDF ? 1 : 0}`;

      pdfjsLib.getDocument({url: `${process.env.REACT_APP_BACK_END_ROUTE}/drive/pdf${pdfFile}`, withCredentials: true}).promise.then((remotePdfDoc) => {
        // console.log('buuu\n\n');
        // console.log(remotePdfDoc);
        setPdfDoc(remotePdfDoc);
        // pdfDoc = remotePdfDoc;
        // console.log(pdfDoc)
      }).catch((err) => {
        console.log(err);
        //Request made while Unauthorized
        if(err.status === 401){
          setCurrentUser(null);
        }
      })
    }, [fileId])
  

    useEffect(() => {
        // console.log('hey haas '  + pageNum)
        // console.log(pdfDoc)
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
      // console.log('\n\nheyyyy');
      // console.log(pdfDoc);
      if (pageNum >= pdfDoc.numPages) {
        return;
      }
      setPageNum(pageNum + 1);
      queueRenderPage(pageNum);
    };

    return(
        <CanvasStyle ref={canvas} onClick={fullScreen}>
        </CanvasStyle>
    )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {dispatch(setCurrentUser(user))} 
})

export default connect(null, mapDispatchToProps)(PresentationCanvas);


