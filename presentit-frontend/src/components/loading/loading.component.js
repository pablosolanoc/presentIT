
import React from 'react';

import LoadingStyles from './loading.styles';

//Major credit to Jason Liquorish
// Animations and styles drom his codepen: https://codepen.io/bassetts/pen/RqrPWG


const Loading = ({files, folder}) => {
    
    let getLoading = () => {
        if(!files){
            return (<div className='circle'>
                    {/* Loading */}
                </div>);
        }else{
            
            return (<div className="multi-ripple">
                    <div></div>
                    <div></div>
                </div>);
        }
    }
    

    return(
        <LoadingStyles>
            {getLoading()}
        </LoadingStyles>
    );

}

export default Loading;