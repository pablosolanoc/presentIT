import styled from 'styled-components';

export const Home = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;

    grid-row-start: 2;
    /* grid-column-end: 2; */

    width: 100%;

    
    /* height: fit-content; */
    /* height: 90vh; */
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35), -4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35);
    border-right: 2px solid rgba(0,0,0,0.2);
    border-bottom: 2px solid rgba(0,0,0,0.2);
    border-radius: 25px;

    display: grid;
    grid-template-columns: repeat(18, 1fr);
    
    /* grid-template-columns: 1fr 1fr; */

    .sideBar{
        /* grid-column: auto / span 1; */
        width: 80%;
        /* background-color: blue; */
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        grid-column: 1 / span 4;

        @media(max-width: 769px){
            grid-column: 1 / span asdas;
            width: 100%; 
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
        }
        
    }

    

`;



