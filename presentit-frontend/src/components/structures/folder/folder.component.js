import React, {useEffect, useRef, useState} from 'react';
import {FolderImage, FolderStyleBig, FolderStyleThin} from './folder.styles.js';
import {ReactComponent as FolderNormal} from '../../../images/folderNormal.svg';
import {ReactComponent as Presentation} from '../../../images/presentation.svg';
import {ReactComponent as Shared} from '../../../images/shared.svg';
import {ReactComponent as FolderOpen} from '../../../images/folderOpen.svg';
import {ReactComponent as FolderOpenWithThings} from '../../../images/folderOpenWithThings.svg';
import { connect } from 'react-redux';
import { addToPath, setCurrentFolderId } from '../../../redux/structure/structure.actions.js';

const Folder = ({numberPresentations, name, shared, mine, id, addToPath, setCurrentFolderId, currentFolderId, setDisplayConfig, folderLayoutConfig, searchInput, isFetchingFilesFolders}) => {

    const FolderStyle = folderLayoutConfig === 0 ? FolderStyleBig : FolderStyleThin;
    
    const [hover, setHover] = useState(false);
    const FolderWhenHover = numberPresentations > 0 ? FolderOpenWithThings : FolderOpen;

    

    const folder = useRef(null);

    const folderClicked = (event) => {
        //make structure reducer change
        

        //This line refers to the search value of the search bar, if a folder is cliked it is resetted to ''.
        searchInput.current.value = '';
        
        if(currentFolderId === 'root'){
            // setDisplayConfig(2);
            if(mine){
                setDisplayConfig(0);
            }else{
                setDisplayConfig(1);
            }
        }

        setCurrentFolderId(id);
        addToPath(name);
        
        
    }

    

    // useEffect( () => {
    //     setDisabled(false);
    // }, [])
    
    return(
            <FolderStyle isFetchingFilesFolders={isFetchingFilesFolders} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={folderClicked}  mine={mine} ref={folder} >
                <div className='logos'>
                    {!hover && <FolderNormal className='folderNormal'></FolderNormal>}
                    {hover && <FolderWhenHover className='folderNormal'></FolderWhenHover>}
                    <div className='plataformImage'>
                        <img src='/images/googleDrive.png'></img>
                    </div>
                    {folderLayoutConfig == 1 ? 
                        <div className='info'>
                            <div className='numberPresentations'>
                                <span className='number'>{numberPresentations}</span>
                                <Presentation className='presentationImage'></Presentation>
                            </div>
                            { shared && <Shared className='mine'></Shared>}
                        </div> : []}
                </div>
                <div className='name'>
                    {name}
                </div>
                {folderLayoutConfig == 0 ? <div className='info'>
                    <div className='numberPresentations'>
                        <span className='number'>{numberPresentations}</span>
                        <Presentation className='presentationImage'></Presentation>
                    </div>
                    { shared && <Shared className='mine'></Shared>}
                </div> : []}
            </FolderStyle>
    )
}

const mapStateToProps = (state) => ({
    folderLayoutConfig: state.layoutConfigs.folderLayoutConfig,
    isFetchingFilesFolders: state.filesFolders.isFetchingFilesFolders
})

const mapDispatchToProps = (dispatch) => ({
    addToPath: (pathEntry) => dispatch(addToPath(pathEntry)),
    setCurrentFolderId: (newId) => dispatch(setCurrentFolderId(newId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Folder);