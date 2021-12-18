import React, {useState} from 'react';

import {UserStyle} from './user.styles';

import {ReactComponent as SignOut} from '../../images/signOut.svg';
import { connect } from 'react-redux';

import {setCurrentUser} from '../../redux/user/user.actions';

const User = ({setCurrentUser}) => {

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
            <img src='/images/profile.jpg' onClick={toggleSubMenu}></img>
            { showSubMenu && <div className='subMenu' >
                    <div className='entry' onClick={signOut}>
                        Sign Out
                        <SignOut></SignOut>
                    </div>
                </div>}
        </UserStyle>
    )

}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
  })
  
  const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  });

export default connect(mapStateToProps, mapDispatchToProps)(User);