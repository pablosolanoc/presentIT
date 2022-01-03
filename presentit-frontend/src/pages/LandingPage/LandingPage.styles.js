import styled from 'styled-components';

const LandingStyle = styled.div`
    height: 100vh;
    width: 100vw;

    /* background-color: red; */
    
    display: grid;

    justify-content: center;
    align-items: center;

    grid-template-columns: 20vw 1fr 20vw;
    grid-template-rows: 30vh 2fr 1fr 1fr 30vh;

    .presentation{
        grid-column: 2;
    }

    .icon{
        
        grid-row: 2;
        
        .logo{
            height: 10rem;
        }
    }
    .name{
        
        grid-row: 3;
        font-size: 7rem;

        #itPart{
            font-weight: 900;
        }

    }
    .signIn{
        grid-row: 4;
    }
    

`;

export {LandingStyle};