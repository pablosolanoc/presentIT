import React from 'react';

import PresenitAnimationStyles from './presentitAnimation.styles';

import {ReactComponent as Logo} from '../../images/logo.svg';
// import GoogleSignIn from '../../components/sign-In/sign-In.component';
import { Link } from 'react-router-dom';

const PresentitAnimation = () => {
    return (
        <PresenitAnimationStyles>
            <div id='holder1' className="holder op">
                <div className='title op'>
                <div className='logo op hoverOnImage'>
                    <Logo className="logoImage " ></Logo>
                </div>
                </div>
            <div className='cuerpo '>
                <div className='sideBar structures hoverOn'>
                    <div className='selected hoverOn'></div>
                </div>
                <div className="content ">
                    <div className='folders structures hoverOn'>
                    <div className="folder hoverOn"></div>
                    <div className="folder folder2 hoverOn"></div>
                    <div className="folder hoverOn"></div>
                    </div>
                    <div className='files structures hoverOn'>
                    <div className='file startTable selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    </div>     
                </div>
                </div>
                <div className='presentation otherPresentation' >
                <div className="header toZeroWidth">
                    <div className="obscurePart1 hoverOn"> </div>
                </div>
                <div className="body toZeroWidth">
                    <div className='leftPart hoverOn'> </div>
                    <div className='rightPart'> 
                    <div className="thingy hoverOn"> </div>
                    <div className="thingy thingy2 hoverOn" > </div>
                    <div className="thingy toZeroWidth hoverOn"> </div>
                    </div>
                </div>
                
                </div>
                
            </div>

            <div id='holder2' className="holder op">
                <div className='title op'>
                <div className='logo op hoverOnImage'>
                    <Logo className="logoImage" ></Logo>
                </div>
                </div>
            <div className='cuerpo '>
                <div className='sideBar structures hoverOn'>
                    <div className='selected hoverOn'></div>
                </div>
                <div className="content ">
                    <div className='folders structures hoverOn'>
                    <div className="folder hoverOn"></div>
                    <div className="folder folder2 hoverOn"></div>
                    <div className="folder hoverOn"></div>
                    </div>
                    <div className='files structures hoverOn'>
                    <div className='file startTable selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    </div>     
                </div>
                </div>
                <div className='presentation otherPresentation' id="presentation2" >
                    <div className="header toZeroWidth">
                    <div className="obscurePart1 hoverOn"> </div>
                </div>
                <div className="body toZeroWidth">
                    <div className='leftPart hoverOn'> </div>
                    <div className='rightPart'> 
                    <div className="thingy hoverOn"> </div>
                    <div className="thingy thingy2 hoverOn" > </div>
                    <div className="thingy toZeroWidth hoverOn"> </div>
                    </div>
                </div>
                
                </div>
            </div>

            <div id='holder3' className="holder op">
                <div className='title op'>
                <div className='logo op hoverOnImage'>
                    <Logo className="logoImage" ></Logo>
                    {/* <Link to="/signin"><div className="signInHover">Sign In</div></Link> */}
                </div>
                </div>
            <div className='cuerpo '>
                <div className='sideBar structures hoverOn'>
                    <div className='selected hoverOn'></div>
                </div>
                <div className="content ">
                    <div className='folders structures hoverOn'>
                    <div className="folder hoverOn"></div>
                    <div className="folder folder2 hoverOn"></div>
                    <div className="folder hoverOn"></div>
                    </div>
                    <div className='files structures hoverOn'>
                    <div className='file startTable selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    </div>     
                </div>
                </div>
                <div className='presentation otherPresentation' id="presentation3" >
                <div className="header toZeroWidth">
                    <div className="obscurePart1 hoverOn"> </div>
                </div>
                <div className="body toZeroWidth">
                    <div className='leftPart hoverOn'> </div>
                    <div className='rightPart'> 
                    <div className="thingy hoverOn"> </div>
                    <div className="thingy thingy2 hoverOn" > </div>
                    <div className="thingy toZeroWidth hoverOn"> </div>
                    </div>
                </div>
                
                </div>
            </div>

            <div id='holder4' className="holder op">
                <div className='title op'>
                <div className='logo op hoverOnImage'>
                    <Logo className="logoImage" ></Logo>
                    {/* <Link to="/signin"><div className="signInHover">Sign In</div></Link> */}
                </div>
                </div>
                <div className='cuerpo '>
                <div className='sideBar structures hoverOn'>
                    <div className='selected hoverOn'></div>
                </div>
                <div className="content ">
                    <div className='folders structures hoverOn'>
                    <div className="folder hoverOn"></div>
                    <div className="folder folder2 hoverOn"></div>
                    <div className="folder hoverOn"></div>
                    </div>
                    <div className='files structures hoverOn'>
                    <div className='file startTable selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    <div className='file selected hoverOn'></div>
                    </div>     
                </div>
                </div>
                <div className='presentation ' id="presentation4" >
                    <div className="header toZeroWidth">
                        <div className="obscurePart1 hoverOn"> </div>
                    </div>
                    <div className="body toZeroWidth">
                        <div className='leftPart hoverOn'> </div>
                        <div className='rightPart'> 
                            <div className="thingy "> </div>
                            <div className="thingy thingy2 " > </div>
                            <div className="thingy toZeroWidth"> </div>
                        </div>
                    </div>
                
                </div>
                <div className='user'></div>
            </div>  
        </PresenitAnimationStyles>  
    )
}

export default PresentitAnimation;

