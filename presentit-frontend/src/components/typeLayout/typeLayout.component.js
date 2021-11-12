import React from 'react';
import { TypeLayoutStyle } from "./typeLayout.styles";
import {ReactComponent as Square} from '../../images/square.svg';

const TypeLayout = () => {


    return(
        <TypeLayoutStyle>
            <div className='types'>
                <div className='row both'>
                    <Square id='square1' className='square'></Square>
                    <Square id='square2' className='square'></Square>
                    <Square id='square3' className='square'></Square>
                </div>
                <div className='columnRow both selected'>
                    <Square id='square1' className='square'></Square>
                    <Square id='square2' className='square'></Square>
                    <Square id='square3' className='square'></Square>
                    <Square id='square4' className='square'></Square>
                </div>
            </div>
        </TypeLayoutStyle>
    );

}

export default TypeLayout;