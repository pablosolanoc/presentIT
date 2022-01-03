import React, {useRef} from "react";
import { SideBarStyle } from "./sideBar.styles";

import { connect } from "react-redux";
import { setPathFrom } from "../../redux/structure/structure.actions";
import { setOverallLayout } from "../../redux/layoutConfigs/layoutConfigs.actions";

import {ReactComponent as Logo} from '../../images/logo.svg';

const SideBar = ({setDisplayConfig, setOverallLayout, displayConfig, overallLayout, currentFolderId, setPathFrom}) => {


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
                <Logo className='logoImage'></Logo>
            </div>
            <div className={`config ${displayConfig === 2 ? 'selected' : ''}`} onClick={() => changeTypeFolder(2)}>All</div>
            <div className={`config ${displayConfig === 0 ? 'selected' : ''}`} onClick={() => changeTypeFolder(0)}>Mine</div>
            <div className={`config ${displayConfig === 1 ? 'selected' : ''}`} onClick={() => changeTypeFolder(1)}>Shared with me</div>
            <div></div>
            <div className={`config ${overallLayout === 0 ? 'selected' : ''}`} onClick={() => setOverallLayout(overallLayout === 0 ? 1 : 0)}>Just Files</div>
        </SideBarStyle>
    );

}

const mapStateToProps = (state) => ({
    overallLayout:  state.layoutConfigs.overallLayout
})

const mapDisptachToProps = (dispatch) => ({
    setPathFrom: (pathIndex) => dispatch(setPathFrom(pathIndex)),
    setOverallLayout: (overallLayoutType) => dispatch(setOverallLayout(overallLayoutType))
})

export default connect(mapStateToProps, mapDisptachToProps)(SideBar);