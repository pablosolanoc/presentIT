import React, {useRef, useEffect} from 'react';
import {TableStyle} from  './files.styles';
// import './files.styles.css';


//Major Credit to DCode, you can find the sorting algorithm at this link
// https://codepen.io/dcode-software/pen/zYGOrzK

const Files = ({files, setPreview, searchBy}) => {

    

    let table = useRef();
    let headerRow = useRef();

    const sortTableByColumn = (column, asc) => {
        const dirModifier = asc ? 1 : -1;
        const tBody = table.childNodes[1];
        
        const rows = Array.from(tBody.childNodes);
        
        // Sort each row
        const sortedRows = rows.sort((a, b) => {
            const aColText = a.childNodes[column].textContent.trim();
            const bColText = b.childNodes[column].textContent.trim();
            
            
            return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
        });
    
        // Remove all existing TRs from the table
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        
        // Re-add the newly sorted rows
        tBody.append(...sortedRows);
    
        // Remember how the column is currently sorted
        headerRow.childNodes.forEach(headerCell => headerCell.classList.remove("th-sort-asc", "th-sort-desc"));
        headerRow.childNodes[column].classList.toggle("th-sort-asc", asc);
        headerRow.childNodes[column].classList.toggle("th-sort-desc", !asc);
    };

    const getIfAsc = (element, column) => {
        const headerCell = element.target;
        
        return !headerCell.classList.contains("th-sort-asc");
    }

    const getDate = (date) => {
        let fecha = new Date(date);
        return `${fecha.toLocaleDateString()} - ${fecha.toLocaleTimeString()}`
    }

    const showFiles = (files) => {
        if(files.length > 0){
            return files.map((file, index) => (
                    <div key={index} className='row' onClick={() => setPreview(file.id, file.extension === 'pdf' ? true : false)}>
                        <div className='name cell'>
                            <div className='typeFile'>
                                { file.extension == 'undefined' ? <img src='/images/ppt2.png'></img> : null}
                                { file.extension == 'pdf' ? <img src='/images/pdf.png'></img> : null}
                            </div>
                            <div className='nameText'>{file.name}</div>
                        </div>
                        <div className='owner cell'>{file.mine ? 'No' : 'Yes'}</div>
                        <div className='lastOpen cell'>{getDate(file.viewedByMeTime)}</div>
                    </div>
                )
            )
        }else{
            return (<div className='noFiles'>No Files found</div>)
        }
    }

    


    return(
        <TableStyle>
            <div id="table-sortable" ref={(element) => {table = element}}>
                <div id='header'>
                    <div className='row' ref={(element) => {headerRow = element}}>
                        <div className='headerCell name cell' onClick={(element) => sortTableByColumn(0, getIfAsc(element, 0))}>Name</div>
                        <div className='headerCell owner cell' onClick={(element) => sortTableByColumn(1, getIfAsc(element, 1))}>Shared With Me</div>
                        <div className='headerCell lastOpen cell' onClick={(element) => sortTableByColumn(2, getIfAsc(element, 2))}>Last Open</div>
                    </div>
                </div>
                <div id='body'>
                    { 
                        showFiles(files)  
                    }
                </div>
            </div>
    </TableStyle>
    )

}

export default Files;