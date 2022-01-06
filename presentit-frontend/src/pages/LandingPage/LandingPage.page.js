import React from 'react';

import LandingPageStyles from './LandingPage.styles';

import PresentitAnimation from '../../components/PresentitAnimation/presenitAnimation.component';
import {ReactComponent as Logo} from '../../images/logo.svg';

import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <LandingPageStyles>
            <div className="centralPiece">
                <div className='info'>
                    <div className="logo">
                        <Link to='/'>
                        <Logo className='logoImage'></Logo>
                        </Link>
                    </div>
                    <div className="title section">
                        present
                        <span id="itPart">IT</span>
                    </div>
                    <div className="slogan section">
                        Present it as a team
                    </div>
                    <div className='description '>
                        <p>present<span className="itPartDescription">IT </span>
                        allows you to present your files with the team that you made it with.</p>
                        <p>It connects directly with <span className="itPartDescription">GoogleDrive </span> and shows all your folders and files.</p>
                        <p>Handle your presentation with present<span className="itPartDescription">IT </span> and make them that little bit easier.</p>
                    </div>
                    <div className="slogan signin">
                        <Link to="/signin" className='link'>Sign In</Link>
                    </div>
                </div>
                <div className='animation'>
                    <PresentitAnimation></PresentitAnimation>
                </div>
            </div>
            
        </LandingPageStyles>
    )
}

export default LandingPage;