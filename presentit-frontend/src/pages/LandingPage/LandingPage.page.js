

import React from 'react';
import SignIn from '../../components/sign-In/sign-In.component';

import {LandingStyle} from './LandingPage.styles';
// import Logo as ReactComponent from './';
import {ReactComponent as Logo} from '../../images/logo.svg';

const LandingPage = () => {
    
    return(
        <LandingStyle>
            <div className='presentation icon'>
                <Logo className='logo'></Logo>
            </div>
            <div className='presentation name'>
                present<span id='itPart'>IT</span>
            </div>
            <div className='presentation signIn'>
                <SignIn></SignIn>
            </div>
        </LandingStyle>
    )

}


export default LandingPage;