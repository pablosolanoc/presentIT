import React, {useEffect, useState} from 'react';
import {FolderStyle, FolderImage} from './folder.styles.js';
import {ReactComponent as FolderNormal} from '../../../images/folderNormal.svg';
import {ReactComponent as Presentation} from '../../../images/presentation.svg';
import {ReactComponent as Shared} from '../../../images/shared.svg';
import {ReactComponent as FolderOpen} from '../../../images/folderOpen.svg';
import {ReactComponent as FolderOpenWithThings} from '../../../images/folderOpenWithThings.svg';
import { connect } from 'react-redux';
import { addToPath, setCurrentFolderId } from '../../../redux/structure/structure.actions.js';

const Folder = ({numberPresentations, name, shared, mine, id, addToPath, setCurrentFolderId, currentFolderId, setDisplayConfig}) => {

    
    const [hover, setHover] = useState(false);

    const FolderWhenHover = numberPresentations > 0 ? FolderOpenWithThings : FolderOpen;


    const folderClicked = () => {
        //make structure reducer change
        console.log('pff')
        console.log(id)
        

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

    useEffect(() => {

    })
    
    return(
            <FolderStyle onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={folderClicked}  mine={mine}>
                <div className='logos' >
                    {!hover && <FolderNormal className='folderNormal'></FolderNormal>}
                    {hover && <FolderWhenHover className='folderNormal'></FolderWhenHover>}
                    <div className='plataformImage'>
                        <img src='/images/googleDrive.png'></img>
                    </div>
                </div>
                <div className='name'>
                    {name}
                </div>
                <div className='info'>
                    <div className='numberPresentations'>
                        <span className='number'>{numberPresentations}</span>
                        <Presentation className='presentationImage'></Presentation>
                    </div>
                    { shared && <Shared className='mine'></Shared>}
                </div>
            </FolderStyle>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToPath: (pathEntry) => dispatch(addToPath(pathEntry)),
    setCurrentFolderId: (newId) => dispatch(setCurrentFolderId(newId))
})

export default connect(null, mapDispatchToProps)(Folder);