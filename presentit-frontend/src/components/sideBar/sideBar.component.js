import React, {useRef} from "react";
import { SideBarStyle } from "./sideBar.styles";

import { connect } from "react-redux";
import { setPathFrom } from "../../redux/structure/structure.actions";

const SideBar = ({setDisplayConfig, displayConfig, currentFolderId, setPathFrom}) => {

    let goFull = useRef(null);

    const changeTypeFolder = (type) => {
        if(currentFolderId === 'root'){
            setDisplayConfig(type);
        }else{
            setPathFrom(0);
            setDisplayConfig(type);
        }
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

    return(
        <SideBarStyle onClick={fullScreen} ref={goFull}>
            <div className='logo' >
                <img src='/images/master-favicon.png'></img>
            </div>
            <div className={`config ${displayConfig === 2 ? 'selected' : ''}`} onClick={() => changeTypeFolder(2)}>All</div>
            <div className={`config ${displayConfig === 0 ? 'selected' : ''}`} onClick={() => changeTypeFolder(0)}>Mine</div>
            <div className={`config ${displayConfig === 1 ? 'selected' : ''}`} onClick={() => changeTypeFolder(1)}>Shared with me</div>
            <div></div>
            <div className={`config`}>Just Files</div>
        </SideBarStyle>
    );

}

const mapDisptachToProps = (dispatch) => ({
    setPathFrom: (pathIndex) => dispatch(setPathFrom(pathIndex))
})

export default connect(null, mapDisptachToProps)(SideBar);