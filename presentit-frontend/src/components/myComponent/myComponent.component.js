import React, {useRef, useEffect} from 'react';

import { CanvasStyle } from './myComponent.styles';

const MyComponent = () => {
  
  let canvas = useRef(null);

  const pdfjsLib = window.pdfjsLib;


  useEffect(() => {
      const ctx = canvas.current.getContext('2d');

      console.log(pdfjsLib);

      pdfjsLib.getDocument(`${process.env.REACT_APP_BACK_END_ROUTE}/drive/pdf`).promise.then((pdfDoc) => {
        console.log(pdfDoc);
      })

  }, []);

  return(
      <CanvasStyle ref={canvas}>

      </CanvasStyle>
  )

};

export default MyComponent;

