
import React from 'react';

import {SignInStyle} from './sign-In.styles';

const SignIn = () => {

    return(
        <SignInStyle>
            {/* <a href='http://localhost:8000/login/logout'>
            </a> */}
            <a href="http://localhost:8000/login">
                
                <div className='buttonSignIn'>
                    <img src='/images/google.png' ></img>
                    Sign In with Google
                </div>
            </a>
        </SignInStyle>
    )

} 


export default SignIn;