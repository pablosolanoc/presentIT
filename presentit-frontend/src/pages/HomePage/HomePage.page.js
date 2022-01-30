import React, {useEffect, useState} from 'react';
import SignIn from '../../components/sign-In/sign-In.component';
import api, {getRequestAuthorized} from '../../services/api';
import { Margins, Title } from '../../components/common.styles';
import {Home} from './HomePage.styles';

import {fetchFilesFoldersAsync} from '../../redux/filesFolders/filesFolders.actions';

import SideBar from '../../components/sideBar/sideBar.component';

import {connect} from 'react-redux';

import Content from '../../components/content/content.component';

import MyComponent from '../../components/presentationPreview/presentationPreview.component.js';
// import SignIn from '../../components/sign-In/sign-In.component';

const SignInPage = ({currentFolderId, overallLayout, fetchFilesFoldersAsync, CSRFToken}) => {

    
    const [myFiles, setMyFiles] = useState({});
    const [sharedFiles, setSharedFiles] = useState({});

    const [showPreview, setShowPreview] = useState(false);

    const [fileId, setFileId] = useState('');
    const [isPDF, setIsPDF] = useState(false);

    const [myFolders, setMyFolders] = useState({});
    const [sharedFolders, setSharedFolders] = useState({});


    // const [displayFolders, setisplay] = useState({});

    const [displayConfig, setDisplayConfig] = useState(1);


    useEffect(() => {
        
        
        fetchFilesFoldersAsync(displayConfig, overallLayout, currentFolderId, CSRFToken);
    }, [currentFolderId, overallLayout, CSRFToken]);

    

    

    useEffect(() => {
        
    })

    

    return(
        <Margins>
            <Home>
                {/* <SignIn></SignIn> */}
                <div className='sideBar'>
                    <SideBar setDisplayConfig={setDisplayConfig} displayConfig={displayConfig} currentFolderId={currentFolderId}></SideBar>
                </div>
                <Content displayConfig={displayConfig}
                    setDisplayConfig={setDisplayConfig}
                    fileId={fileId}
                    setFileId={setFileId}
                   
                    setShowPreview={setShowPreview}
                    showPreview={showPreview}
                    setIsPDF={setIsPDF}
                   
                />
            </Home>
            <MyComponent setShowPreview={setShowPreview} showPreview={showPreview} fileId={fileId} isPDF={isPDF}></MyComponent>
        </Margins>
    )

}

const mapStateToProps = (state) => ({
    currentFolderId: state.structure.currentFolderId,
    overallLayout: state.layoutConfigs.overallLayout,
    CSRFToken: state.user.CSRFToken
})

const mapDispatchToProps = (dispatch) => ({
    fetchFilesFoldersAsync: (displayConfig ,overallLayout, currentFolderId, CSRFToken) => dispatch(fetchFilesFoldersAsync(displayConfig ,overallLayout, currentFolderId, CSRFToken))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);