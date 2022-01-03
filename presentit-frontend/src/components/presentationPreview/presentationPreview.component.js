import React, {useRef, useEffect, useState} from 'react';

import  {PreviewStyle, ActiveUsersStyle} from './presentationPreview.styles';

import PresentationCanvas from '../presentationCanvas/presentationCanvas.component'

const MyComponent = ({setShowPreview, showPreview, fileId, isPDF}) => {

  let [activeUsers, setActiveUsers] = useState([]);
  let [lastActiveUser, setLastActiveUser] = useState(null);
  
  useEffect(() => {
    if(showPreview){
      document.body.classList.add('noScroll');
    }else{
      document.body.classList.remove('noScroll');
    }
  }, [showPreview]);


  useEffect(() => {
    console.log(activeUsers);

    const newActiveUsers = [];
    if(lastActiveUser !== null){
      for(let i = 0; i<activeUsers.length; i++){
        if(activeUsers[i].picture !== lastActiveUser.picture){
          newActiveUsers.push(activeUsers[i]);
        }
      }
      newActiveUsers.unshift(lastActiveUser);
    }
    // console.log('Aqui');
    // console.log(newActiveUsers)
    setActiveUsers(newActiveUsers);

  }, [lastActiveUser])
  
  useEffect(() => {
    console.log("Rendering Preview")
  }, []);

  const clickOutside = () => {
    setActiveUsers([]);
    setShowPreview(!showPreview)
  }

  return(
    <PreviewStyle className={`${showPreview ? '' : 'hidden' }`} onClick={clickOutside} >
      <ActiveUsersStyle>
        { 
          activeUsers.map((user) => (
            <div className='activeUser'>
              <img src={user.picture}></img>
            </div>
          ))
        }
      </ActiveUsersStyle>
      {showPreview ? <PresentationCanvas fileId={fileId} isPDF={isPDF} activeUsers={activeUsers} setActiveUsers={setActiveUsers} lastActiveUser={lastActiveUser} setLastActiveUser={setLastActiveUser}/> : []}
    </PreviewStyle>  
  )

};

export default MyComponent;

