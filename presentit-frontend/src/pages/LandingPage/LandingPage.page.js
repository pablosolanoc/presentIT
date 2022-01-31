import React, { useEffect } from 'react';

import LandingPageStyles from './LandingPage.styles';

import {AlignWithFooter} from '../../components/common.styles';

import PresentitAnimation from '../../components/PresentitAnimation/presenitAnimation.component';
import {ReactComponent as Logo} from '../../images/logo.svg';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { contentLandingPage } from '../../content/contentLandingPage';

import Footer from '../../components/footer/footer.component';

const LandingPage = ({userLanguage}) => {

    const content = contentLandingPage[userLanguage];    

    return(
        <AlignWithFooter>
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
                            {content[0]}
                        </div>
                        <div className='description '>
                            <p>present<span className="itPartDescription">IT </span>
                            {content[1]}</p>
                            <p>{content[2]}<span className="itPartDescription">GoogleDrive. </span> {content[3]} </p>
                            <p>{content[4]}<span className="itPartDescription">IT </span> {content[5]}</p>
                            <ul>
                                
                            </ul>
                        </div>
                        {/* <div className="slogan signin">
                            <Link to="/signin" className='link'>Sign In</Link>
                        </div> */}
                        <div className="privacy ">
                            {content[6]} <Link to="privacy">{content[7]}</Link> {content[8]}
                        </div>
                    </div>
                    <div className='animation'>
                        <PresentitAnimation></PresentitAnimation>
                    </div>
                </div>
                
            </LandingPageStyles>
            <Footer></Footer>    
        </AlignWithFooter>
    )
}

const mapStateToProps = (state) => ({
    userLanguage: state.user.userLanguage
})

export default connect(mapStateToProps, null)(LandingPage);