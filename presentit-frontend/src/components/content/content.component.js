import React, {useEffect, useRef, useState} from "react";

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

    
    const [searchBy, setSearchBy] = useState(''); // By default is 0, it means by folder
    const [actuallyShownFolders, setActuallyShownFolders] = useState([]);
    const [actuallyShownFiles, setActuallyShownFiles] = useState([]);
    const searchInput = useRef(null);

    useEffect(() => {
        let displayFolders = {};
        let displayFoldersForGood = [];
        
        if(displayConfig === 0){
            displayFolders = myFolders
        }else if(displayConfig === 1){
            displayFolders = sharedFolders
        }else if(displayConfig === 2){
            displayFolders = {...myFolders, ...sharedFolders};
        }
        
        
        if(Object.keys(displayFolders).length > 0){
            
            const keys = Object.keys(displayFolders);
            for(let i=0; i<keys.length; i++){
                const nameFolder = displayFolders[keys[i]].name.toLowerCase();
                if(nameFolder.includes(searchBy)){
                    displayFoldersForGood.push(
                        <Folder key={i} id={keys[i]} name={displayFolders[keys[i]].name}
                                numberPresentations={displayFolders[keys[i]].filesInside}
                                mine={displayFolders[keys[i]].mine}
                                shared={displayFolders[keys[i]].shared}
                                currentFolderId={currentFolderId}
                                setDisplayConfig={setDisplayConfig}
                                disabled={disabled}
                                setDisabled={setDisabled}
                                searchInput={searchInput}
                        />
                    )
                }
            }

            displayFoldersForGood.sort(compareFolders);

            setActuallyShownFolders(displayFoldersForGood);
        }else{
            setActuallyShownFolders(<div className='noFolders'>No Folders</div>)
        }
    }, [displayConfig, sharedFolders, myFolders, searchBy, disabled])

    useEffect(() => {

        let displayFiles = {};
        let displayFilesForGood = [];
        if(displayConfig === 0){
            displayFiles = myFiles
        }else if(displayConfig === 1){
            displayFiles = sharedFiles
        }else if(displayConfig === 2){
            displayFiles = {...myFiles, ...sharedFiles};
        }

        //Busqueda entre los archivos
        const keys = Object.keys(displayFiles);
        for(let i=0; i<keys.length; i++){
            const nameFile = displayFiles[keys[i]].name.toLowerCase();
            if(nameFile.includes(searchBy)){
                displayFilesForGood.push({...displayFiles[keys[i]], id: keys[i]})
            }
        }
        
        displayFilesForGood.sort(compareFiles);

        setActuallyShownFiles(
            displayFilesForGood
        )
    }, [displayConfig, sharedFiles, myFiles, searchBy])

    const compareFolders = (a, b) => {
        if ( a.props.name < b.props.name ){
            return -1;
        }
        if ( a.props.name > b.props.name ){
            return 1;
        }
        return 0;
    }
    const compareFiles = (a, b) => {
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
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
                        <SearchBar searchBy={searchBy} setSearchBy={setSearchBy} searchInput={searchInput}></SearchBar>
                        <Path></Path>
                        
                    </div>
                    <div className={`folders ${folderLayoutConfig == 0 ? 'layoutType0' : 'layoutType1'}`}>
                        {actuallyShownFolders}
                    </div>      
                    
                    <div className='files'>
                        <Title>Archivos Encontrados</Title>
                        <Files files={actuallyShownFiles} setPreview={setPreview}></Files>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div className='bar'>
                        <User></User>
                    </div>
                    <div className='functional'>
                        <SearchBar searchBy={searchBy} setSearchBy={setSearchBy} searchInput={searchInput}></SearchBar>
                        {/* <Path></Path> */}
                    </div>
                    <div className='files'>
                        <Title>Archivos Encontrados</Title>
                        <Files files={actuallyShownFiles} setPreview={setPreview}></Files>
                    </div>
                </>
            )
        }
        
    }

    const setPreview = (newFileId, newIsPDF) => {
    
        setShowPreview(!showPreview);
        if(newFileId !== fileId){
            
            setFileId(newFileId);
            setIsPDF(newIsPDF);
        }
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
