import React, {useState} from "react";

import {ContentStyled} from './content.styles';

import TypeLayout from '../typeLayout/typeLayout.component';
import User from '../user/user.component';
import SearchBar from '../searchBar/searchBar.component'
import Path from '../path/path.component';
import Files from '../files/files.component';
import { Title } from '../common.styles';
import Folder from '../structures/folder/folder.component';

import {connect} from 'react-redux';

const Content = ({
                    folderLayoutConfig,
                    overallLayout,
                    currentFolderId,
                    displayConfig,
                    setDisplayConfig,
                    fileId,
                    setFileId,
                    myFolders,
                    sharedFolders,
                    disabled,
                    setDisabled,
                    setShowPreview,
                    showPreview,
                    setIsPDF,
                    myFiles,
                    sharedFiles
                }) => {

    
    const [searchBy, setSearchBy] = useState(0); // By default is 0, it means by folder

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
                                disabled={disabled}
                                setDisabled={setDisabled}
                        />
                    )
        }else{
            return (<div className='noFolders'>No Folders</div>)
        }
        
    }

    const correctLayout = () => {
        if(overallLayout){
            return (
                <>
                    <div className='bar'>
                        <TypeLayout></TypeLayout>
                        <User></User>
                    </div>
                    <div className='functional'>
                        <SearchBar></SearchBar>
                        <Path></Path>
                        
                    </div>
                    <div className={`folders ${folderLayoutConfig == 0 ? 'layoutType0' : 'layoutType1'}`}>
                        {
                            showCorrectFolders(displayConfig)
                        }
                    </div>      
                    
                    <div className='files'>
                        <Title>Archivos Encontrados</Title>
                        <Files files={showCorrectFiles(displayConfig)} setPreview={setPreview}></Files>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div className='bar'>
                        <TypeLayout></TypeLayout>
                        <User></User>
                    </div>
                    <div className='functional'>
                        <SearchBar searchBy={searchBy}></SearchBar>
                        {/* <Path></Path> */}
                    </div>
                    <div className='files'>
                        <Title>Archivos Encontrados</Title>
                        <Files searchBy={searchBy} files={showCorrectFiles(displayConfig)} setPreview={setPreview}></Files>
                    </div>
                </>
            )
        }
        
    }

    const setPreview = (newFileId, newIsPDF) => {
        console.log({newFileId, fileId})
        setShowPreview(!showPreview);
        if(newFileId !== fileId){
            console.log('heyyy hereeee\n\n\n')
            setFileId(newFileId);
            setIsPDF(newIsPDF);
        }else{
            console.log('heyyy hereeee 222222\n\n\n')
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
            ({...displayFiles[key], id: key})
        )
    }

    return(
        <ContentStyled>
            { correctLayout() }
        </ContentStyled>
    )
}

const mapStateToProps = (state) => ({
    currentFolderId: state.structure.currentFolderId,
    folderLayoutConfig: state.layoutConfigs.folderLayoutConfig,
    overallLayout: state.layoutConfigs.overallLayout
})


export default connect(mapStateToProps, null)(Content);
