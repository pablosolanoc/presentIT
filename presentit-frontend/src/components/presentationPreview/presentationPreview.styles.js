import styled from "styled-components";



export const PreviewStyle = styled.div`

    /* width: 100%; */
    height: 100%;
    width: 100%;

    /* max-height: 80%; */

    overflow-y: scroll;

    z-index: 2;

    background-color: rgba(0,0,0,0.4);
    position: fixed;

    margin: 0 !important;
    padding: 0 !important;

    top: 0px;
    left: 0px;
    bottom: 0px;

    

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* position: relative; */

    
`;

export const ActiveUsersStyle = styled.div`
    width: 90vw;
    /* background: yellow; */

    display: flex;
    justify-content: end;

    .activeUser{
        
        img{
            height: 2rem;
            border-radius: 50%;
            padding: 0.1rem;
            border: 4px solid #6a2afe;
        }
    }
`;

