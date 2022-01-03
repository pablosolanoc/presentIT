
import React from 'react';

import {SignInStyle} from './sign-In.styles';

const SignIn = () => {

    return(
        <SignInStyle>
            <a href={`${process.env.REACT_APP_BACK_END_ROUTE}/login`}>
                
                <div className='buttonSignIn'>
                    <img src='/images/google.png' ></img>
                    Sign In with Google
                </div>
            </a>
        </SignInStyle>
    )

} 


export default SignIn;