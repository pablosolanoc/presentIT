

import React from 'react';
import SignIn from '../../components/sign-In/sign-In.component';

import {LandingStyle} from './LandingPage.styles';


const LandingPage = () => {
    
    return(
        <LandingStyle>
            <div className='presentation icon'>
                <img src='/images/master-favicon.png'></img>
            </div>
            <div className='presentation name'>
                presentIT
            </div>
            <div className='presentation signIn'>
                <SignIn></SignIn>
            </div>
        </LandingStyle>
    )

}


export default LandingPage;