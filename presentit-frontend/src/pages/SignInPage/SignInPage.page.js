

import React from 'react';
import SignIn from '../../components/sign-In/sign-In.component';

import {SignInStyle} from './SignInPage.styles';
import {AlignWithFooter} from '../../components/common.styles';
// import Logo as ReactComponent from './';
import {ReactComponent as Logo} from '../../images/logo.svg';
import Footer from '../../components/footer/footer.component';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    
    return(
        <AlignWithFooter>
            <SignInStyle>
                <div className='all'>
                    <div className='presentation icon'>
                        <Link to='/home'><Logo className='logo'></Logo></Link>
                    </div>
                    <div className='presentation name'>
                        present<span id='itPart'>IT</span>
                    </div>
                    <div className='presentation signIn'>
                        <SignIn></SignIn>
                    </div>
                </div>
            </SignInStyle>
            <Footer></Footer>
        </AlignWithFooter>
    )

}


export default LandingPage;