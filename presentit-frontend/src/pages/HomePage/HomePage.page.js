import React, {useEffect, useState} from 'react';
import SignIn from '../../components/sign-In/sign-In.component';
import api, {getRequestAuthorized} from '../../services/api';
import { Margins, Title } from '../../components/common.styles';
import {Home} from './HomePage.styles';
import Folder from '../../components/structures/folder/folder.component';
import SearchBar from '../../components/searchBar/searchBar.component'
import Path from '../../components/path/path.component';
import TypeLayout from '../../components/typeLayout/typeLayout.component';
import Files from '../../components/files/files.component';
import User from '../../components/user/user.component';
import SideBar from '../../components/sideBar/sideBar.component';

import {connect} from 'react-redux';

import MyComponent from '../../components/myComponent/myComponent.component.js';
// import SignIn from '../../components/sign-In/sign-In.component';

const HomePage = ({currentFolderId}) => {

    const [myFolders, setMyFolders] = useState({});
    const [myFiles, setMyFiles] = useState({});
    const [sharedFolders, setSharedFolders] = useState({});
    const [sharedFiles, setSharedFiles] = useState({});

    // const [displayFolders, setisplay] = useState({});

    const [displayConfig, setDisplayConfig] = useState(1);

    const setAll = (response) => {
        const {folders, files} = response.data;
        // console.log('hola')
        console.log(response);
        setMyFolders(folders.ownFolders);
        setMyFiles(files.ownFiles);
        setSharedFolders(folders.sharedFolders);
        setSharedFiles(files.sharedFiles);

    }

    useEffect(() => {
        console.log(currentFolderId);
        async function fetchData(){
            let config = {
                params: {
                    displayConfig: displayConfig
                },
                headers: {
                    folderid: currentFolderId
                }
            }
            await getRequestAuthorized('/drive/structure', setAll, config);
        }
        fetchData();
        // console.log(structure);
        // console.log(hola);
    }, [currentFolderId]);

    const showCorrectFolders = (displayConfig) => {
        let displayFolders = {};
        
            if(displayConfig === 0){
                displayFolders = myFolders
            }else if(displayConfig === 1){
                displayFolders = sharedFolders
            }else if(displayConfig === 2){
                displayFolders = {...myFolders, ...sharedFolders};
            }
        
        
        
        if(Object.keys(displayFolders).length > 0){
            return Object.keys(displayFolders).map((key, index) => 
                        <Folder key={index} id={key} name={displayFolders[key].name}
                                numberPresentations={displayFolders[key].filesInside}
                                mine={displayFolders[key].mine}
                                shared={displayFolders[key].shared}
                                currentFolderId={currentFolderId}
                                setDisplayConfig={setDisplayConfig}
                        />
                    )
        }else{
            return (<div className='noFolders'>No Folders</div>)
        }
        
    }

    const showCorrectFiles = (displayConfig) => {
        let displayFiles = {};
        if(displayConfig === 0){
            displayFiles = myFiles
        }else if(displayConfig === 1){
            displayFiles = sharedFiles
        }else if(displayConfig === 2){
            displayFiles = {...myFiles, ...sharedFiles};
        }
        return Object.keys(displayFiles).map((key) => 
            displayFiles[key]
        )
    }

    useEffect(() => {
        
    })

    return(
        <Margins>
            <Home>
                
                <SignIn></SignIn>
                <div className='sideBar'>
                    <SideBar setDisplayConfig={setDisplayConfig} displayConfig={displayConfig} currentFolderId={currentFolderId}></SideBar>
                </div>
                <div className='content'>
                    <MyComponent></MyComponent>
                    <div className='bar'>
                        <TypeLayout></TypeLayout>
                        <User></User>
                    </div>
                    <div className='functional'>
                        {/* <SearchBar></SearchBar> */}
                        <Path></Path>
                        
                    </div>
                    <div className='folders'>
                        {
                            showCorrectFolders(displayConfig)
                        }
                    </div>      
                    
                    <div className='files'>
                        <Title>Archivos Encontrados</Title>
                        <Files files={showCorrectFiles(displayConfig)}></Files>
                    </div>              
                </div>
            </Home>
        </Margins>
    )

}

const mapStateToProps = (state) => ({
    currentFolderId: state.structure.currentFolderId
})

export default connect(mapStateToProps, null)(HomePage);