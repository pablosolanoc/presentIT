import React, {useEffect, useState} from 'react';
import SignIn from '../../components/sign-In/sign-In.component';
import api, {getRequestAuthorized} from '../../services/api';
import { Margins, Title } from '../../components/common.styles';
import {Home} from './HomePage.styles';




import SideBar from '../../components/sideBar/sideBar.component';

import {connect} from 'react-redux';

import Content from '../../components/content/content.component';

import MyComponent from '../../components/presentationPreview/presentationPreview.component.js';
// import SignIn from '../../components/sign-In/sign-In.component';

const HomePage = ({currentFolderId, overallLayout}) => {

    
    const [myFiles, setMyFiles] = useState({});
    const [sharedFiles, setSharedFiles] = useState({});

    const [showPreview, setShowPreview] = useState(false);

    const [fileId, setFileId] = useState('');
    const [isPDF, setIsPDF] = useState(false);

    const [myFolders, setMyFolders] = useState({});
    const [sharedFolders, setSharedFolders] = useState({});

    const [disabled, setDisabled] = useState(false);

    // const [displayFolders, setisplay] = useState({});

    const [displayConfig, setDisplayConfig] = useState(1);


    const setAll = (response) => {
        console.log(response.data)
        const {folders, files} = response.data;
        

        if( overallLayout === 1 ){
            setMyFolders(folders.ownFolders);
            setSharedFolders(folders.sharedFolders);
        }

        setMyFiles(files.ownFiles);
        setSharedFiles(files.sharedFiles);
        
    }

    

    useEffect(() => {
        
        async function fetchData(){
            let config = {
                params: {
                    displayConfig: displayConfig,
                    overallLayout: overallLayout
                },
                headers: {
                    folderid: currentFolderId
                }
            }
            setDisabled(true);
            await getRequestAuthorized('/drive/structure', setAll, config);
            setDisabled(false);
            
        }
        fetchData();
        // console.log(structure);
        // console.log(hola);
    }, [currentFolderId, overallLayout]);

    

    

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
                    myFolders={myFolders}
                    sharedFolders={sharedFolders}
                    disabled={disabled}
                    setDisabled={setDisabled}
                    setShowPreview={setShowPreview}
                    showPreview={showPreview}
                    setIsPDF={setIsPDF}
                    myFiles={myFiles}
                    sharedFiles={sharedFiles}
                />
            </Home>
            <MyComponent setShowPreview={setShowPreview} showPreview={showPreview} fileId={fileId} isPDF={isPDF}></MyComponent>
        </Margins>
    )

}

const mapStateToProps = (state) => ({
    currentFolderId: state.structure.currentFolderId,
    overallLayout: state.layoutConfigs.overallLayout
})



export default connect(mapStateToProps, null)(HomePage);