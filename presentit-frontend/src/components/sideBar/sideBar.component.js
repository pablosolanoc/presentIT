import React, {useRef} from "react";
import { SideBarStyle } from "./sideBar.styles";

import { connect } from "react-redux";
import { setPathFrom } from "../../redux/structure/structure.actions";

const SideBar = ({setDisplayConfig, displayConfig, currentFolderId, setPathFrom}) => {


    const changeTypeFolder = (type) => {
        if(currentFolderId === 'root'){
            setDisplayConfig(type);
        }else{
            setPathFrom(0);
            setDisplayConfig(type);
        }
    }

    

    return(
        <SideBarStyle>
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