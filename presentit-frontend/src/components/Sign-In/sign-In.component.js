
import React from 'react';

import { signInWithGoogle, signOutWithGoogle } from '../../utils/sign-inWays.utils';

const SignIn = () => {

    return(
        <div>
            <button onClick={signInWithGoogle}>
            {/* <button > */}
                SIGN IN WITH GOOGLE
            </button>
            <button onClick={signOutWithGoogle}>
            {/* <button > */}
                SIGN OUT
            </button>
        </div>
    )

} 


export default SignIn;