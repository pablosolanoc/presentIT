import styled from 'styled-components';

const SignInStyle = styled.div`
    height: 100%;
    width: 100%;

    /* background-color: red; */
    
    display: flex;

    justify-content: center;
    align-items: center;

    /* grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 30vh 2fr 1fr 1fr 30vh; */

    .all{
        width: 80%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */

        justify-content: center;
        align-items: center;
    }

    .presentation{
        /* grid-column: 2; */
        width:100%
    }

    .icon{
        
        /* grid-row: 2; */
        width: 100%;
        .logo{
            height: 10rem;
            width: 100%;
        }
    }
    .name{
        overflow-wrap: normal;
        /* grid-row: 3; */
        font-size: 7rem;
        @media(max-width: 769px){
            font-size: 4rem;
        }
        @media(max-width: 350px){
            font-size: 2rem;
        }

        #itPart{
            font-weight: 900;
        }

        transition: all 0.2s ease-in;

    }
    .signIn{
        /* grid-row: 4; */
    }
    

`;

export {SignInStyle};