import React, {useState} from 'react';

import {UserStyle} from './user.styles';

import {ReactComponent as SignOut} from '../../images/signOut.svg';
import { connect } from 'react-redux';

import {setCurrentUser} from '../../redux/user/user.actions';

const User = ({setCurrentUser, currentUser, userLanguage}) => {

    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    }

    const signOut = () => {
        // setCurrentUser(null);
        window.location.href = `${process.env.REACT_APP_BACK_END_ROUTE}/login/logout`; 
    }

    return(
        <UserStyle>
            <img src={currentUser.picture} onClick={toggleSubMenu}></img>
            { showSubMenu && <div className='subMenu' >
                    <div className='entry' onClick={signOut}>
                        {userLanguage === 'en' ? 'Sign Out' : 'Salir'}
                        <SignOut></SignOut>
                    </div>
                </div>}
        </UserStyle>
    )

}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    userLanguage: state.user.userLanguage
  })
  
  const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  });

export default connect(mapStateToProps, mapDispatchToProps)(User);