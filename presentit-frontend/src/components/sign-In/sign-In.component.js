
import React from 'react';


const SignIn = () => {

    return(
        <div>
            
            <button >
            {/* <button > */}
                SIGN IN WITH GOOGLE
            </button>
            <a href='http://localhost:8000/login/logout'>
                <button >
                {/* <button > */}
                    SIGN OUT
                </button>
            </a>
            <button >
            {/* <button > */}
                Refresh
            </button>
            <a href="http://localhost:8000/login">Sign In</a>
        </div>
    )

} 


export default SignIn;