import React, {useRef, useEffect, useState} from 'react';

import  {PreviewStyle} from './presentationPreview.styles';

import PresentationCanvas from '../presentationCanvas/presentationCanvas.component'

const MyComponent = ({setShowPreview, showPreview, fileId, isPDF}) => {


  
  useEffect(() => {
    if(showPreview){
      document.body.classList.add('noScroll');
    }else{
      document.body.classList.remove('noScroll');
    }
  }, [showPreview]);

  

  return(
    <PreviewStyle className={`${showPreview ? '' : 'hidden' }`} onClick={() => setShowPreview(!showPreview)} >
      <PresentationCanvas fileId={fileId} isPDF={isPDF} />
    </PreviewStyle>  
  )

};

export default MyComponent;

