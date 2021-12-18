import React, { useEffect } from 'react';
import { TypeLayoutStyle } from "./typeLayout.styles";
import {ReactComponent as Square} from '../../images/square.svg';

import { setCurrentFolderLayout } from '../../redux/layoutConfigs/layoutConfigs.actions';

import { connect } from 'react-redux';

const TypeLayout = ({folderLayoutConfig, setCurrentFolderLayout}) => {

    useEffect(() => {
    })

    return(
        <TypeLayoutStyle>
            <div className='types'>
                <div className={`row both ${folderLayoutConfig === 1 ? 'selected' : ''}`} onClick={() => {setCurrentFolderLayout(1)}}>
                    <Square id='square1' className='square'></Square>
                    <Square id='square2' className='square'></Square>
                    <Square id='square3' className='square'></Square>
                </div>
                <div className={`columnRow both ${folderLayoutConfig === 0 ? 'selected' : ''}`} onClick={() => {setCurrentFolderLayout(0)}}>
                    <Square id='square1' className='square'></Square>
                    <Square id='square2' className='square'></Square>
                    <Square id='square3' className='square'></Square>
                    <Square id='square4' className='square'></Square>
                </div>
            </div>
        </TypeLayoutStyle>
    );

}

const mapStateToProps = (state) => ({
    folderLayoutConfig: state.layoutConfigs.folderLayoutConfig
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentFolderLayout: (layoutFolderType) => dispatch(setCurrentFolderLayout(layoutFolderType))
})

export default connect(mapStateToProps, mapDispatchToProps)(TypeLayout);