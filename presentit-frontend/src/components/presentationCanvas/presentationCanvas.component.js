import React, {useEffect, useState, useRef} from 'react';
import { connect } from 'react-redux';

import {CanvasStyle, CanvasHolder} from './presentationCanvas.styles';
import {setCSRFToken, setCurrentUser} from '../../redux/user/user.actions';
import {io} from 'socket.io-client';
import {ReactComponent as LeftArrow} from '../../images/arrowLeft.svg';
import {ReactComponent as RightArrow} from '../../images/arrowRight.svg';
import Loading from '../loading/loading.component';

const PresentationCanvas = ({fileId, isPDF, setCurrentUser, currentUser, activeUsers, setActiveUsers, lastActiveUser, setLastActiveUser, CSRFToken, setCSRFToken, clickOutside}) => {

    // let canvas = useRef(null);

    let [pageIsRendering, setPageIsRendering] = useState(false);
    let [pageNum, setPageNum] = useState(1);
    let [pdfDoc, setPdfDoc] = useState(null);

    let [socket, setSocket] = useState(null);
     // let pdfDoc = null;
    let [ctx, setCTX] = useState(null);
    let canvas = useRef(null);
    let goLeft = useRef(null);
    let goRight = useRef(null);
    let [pageNumIsPending, setPageNumIsPending] = useState(null);
    let [loading, setLoading] = useState(true);

    let xStart = null;
    let xNewest = null;
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
      const newSocket = io(`${process.env.REACT_APP_BACK_END_ROUTE}`, {
        withCredentials: true,
        query: {
          room: fileId
        }
      });
      newSocket.on("connect", (socket) => {
        //Conectado
      });
      newSocket.on("updatePage", (page, user) => {
        
        
        setLastActiveUser(user);

        setPageNum(page);
      });

      setSocket(newSocket);

    }, [])

    useEffect(() => {
        if(!loading){
          setCTX(canvas.current.getContext('2d'))
          // console.log("Rendering Canvas");
          
          canvas.current.focus();
          //Socket Functions
        }
        
    }, [loading]);

    useEffect(() => {
      

      let pdfFile = `?fileId=${fileId}&pdfFile=${isPDF ? 1 : 0}`;

      pdfjsLib.getDocument({url: `${process.env.REACT_APP_BACK_END_ROUTE}/drive/pdf${pdfFile}`, withCredentials: true, httpHeaders : {'CSRF-Token': CSRFToken}}).promise.then((remotePdfDoc) => {
        
        
        setPdfDoc(remotePdfDoc);
        
        setLoading(false);
        
      }).catch((err) => {
        
        //Request made while Unauthorized
        if(err.status === 401){
          setCSRFToken(null);
          setCurrentUser(null);
        }
      })
    }, [fileId])

    useEffect(() => {
      if(pdfDoc){
        queueRenderPage(pageNum);
      }
    }, [pageNum])
  

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
      //The emit to send the change of page NEEDS to be here otherwise causes 
      // bad behaviour if it is on the useEffect of pageNum
      socket.emit('updatePage', pageNum - 1, fileId, currentUser);
    };
    
    // Show Next Page
    const showNextPage = () => {
      // console.log('\n\nheyyyy');
      // console.log(pdfDoc);
      
      if (pageNum >= pdfDoc.numPages) {
        return;
      }
      setPageNum(pageNum + 1);
      //The emit to send the change of page NEEDS to be here otherwise causes 
      // bad behaviour if it is on the useEffect of pageNum
      socket.emit('updatePage', pageNum + 1, fileId, currentUser);
    };

    const keyPressed = (event) => {
      
      if(event.code === "ArrowRight"){
        showNextPage();
      }else if(event.code === "ArrowLeft"){
        showPrevPage();
      }else if(event.code === "Escape"){
        clickOutside();
      }
    }

    const funcion = (event) => {
      
      xNewest = event.changedTouches[0].clientX;
      
      let difference = (xStart - xNewest);
      
      if(difference > 0){
        if(difference > 80){
          showNextPage();
        }
      }else{
        if(difference < -80){
          showPrevPage();
        }
      }
    }

    const funcion2 = (event) => {
      xStart = event.targetTouches[0].clientX;
      
    }

    const goLeftPressed = (event) => {
      canvas.current.focus();
      event.stopPropagation();
      if(!loading){
        showPrevPage();
      }    
    }

    const goRightPressed = (event) => {
      canvas.current.focus();
      // console.log(event);
      event.stopPropagation();
      if(!loading){
        showNextPage();
      }
    }

    const goKeyUp = (event) => {
      if(event.code === "Escape"){
        clickOutside();
      }
    }

    return(
      <CanvasHolder>
        <div className='go goLeft' onClick={goLeftPressed} ref={goLeft}>
          <LeftArrow className='arrow'></LeftArrow>
        </div>
        {loading ? <Loading></Loading> : <CanvasStyle tabIndex="0" ref={canvas} onClick={fullScreen} onKeyUp={keyPressed} onTouchStart={funcion2} onTouchEnd={funcion}>
        </CanvasStyle>}
        

        <div className='go goRight' onClick={goRightPressed} onKeyUp={goKeyUp} ref={goRight}>
          <RightArrow className='arrow'></RightArrow>
        </div>
      </CanvasHolder>
    )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  CSRFToken: state.user.CSRFToken
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {dispatch(setCurrentUser(user))},
  setCSRFToken: (CSRFToken) => {dispatch(setCSRFToken(CSRFToken))}
})

export default connect(mapStateToProps, mapDispatchToProps)(PresentationCanvas);


