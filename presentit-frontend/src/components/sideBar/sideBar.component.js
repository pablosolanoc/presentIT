import React, {useRef} from "react";
import { SideBarStyle } from "./sideBar.styles";

import { connect } from "react-redux";
import { setPathFrom } from "../../redux/structure/structure.actions";
import { setOverallLayout } from "../../redux/layoutConfigs/layoutConfigs.actions";

import {ReactComponent as Logo} from '../../images/logo.svg';

import { contentSideBar } from "../../content/contentSideBar";

import { Link } from "react-router-dom";

const SideBar = ({setDisplayConfig, setOverallLayout, displayConfig, overallLayout, currentFolderId, setPathFrom, userLanguage}) => {

    const content = contentSideBar[userLanguage];

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
                <Link to='/' onClick={() => window.location.reload()}><Logo className='logoImage'></Logo></Link>
            </div>

            <div className={`config ${displayConfig === 2 ? 'selected' : ''}`} onClick={() => changeTypeFolder(2)}>{content[0]}</div>
            <div className={`config ${displayConfig === 0 ? 'selected' : ''}`} onClick={() => changeTypeFolder(0)}>{content[1]}</div>
            <div className={`config ${displayConfig === 1 ? 'selected' : ''}`} onClick={() => changeTypeFolder(1)}>{content[2]}</div>
            <div></div>
            <div className={`config ${overallLayout === 0 ? 'selected' : ''}`} onClick={() => setOverallLayout(overallLayout === 0 ? 1 : 0)}>{content[3]}</div>
        </SideBarStyle>
    );

}

const mapStateToProps = (state) => ({
    overallLayout:  state.layoutConfigs.overallLayout,
    userLanguage: state.user.userLanguage
})

const mapDisptachToProps = (dispatch) => ({
    setPathFrom: (pathIndex) => dispatch(setPathFrom(pathIndex)),
    setOverallLayout: (overallLayoutType) => dispatch(setOverallLayout(overallLayoutType))
})

export default connect(mapStateToProps, mapDisptachToProps)(SideBar);