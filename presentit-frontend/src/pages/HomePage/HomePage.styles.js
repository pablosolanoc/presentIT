import styled from 'styled-components';

export const Home = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;

    grid-row-start: 2;
    /* grid-column-end: 2; */

    width: 100%;
    ;
    /* height: fit-content; */
    /* height: 90vh; */
    background-color: rgba(228, 238, 248, 0.6);
    box-shadow: 10px 10px 10px rgba(0,0,0,0.2), -1px -1px 10px rgba(0,0,0,0.2) ;
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

    .content{
        grid-column: 5 / span asdas;

        @media(max-width: 769px){
            grid-column: 1 / span asdas;
            
        }
        /* height: 90%; */
        align-self: center;
        justify-self: center;
        width: 90%; 
        display: flex;
        flex-direction: column;
        /* grid-template-rows: repeat(10, 100px);
        grid-template-columns: repeat(1, 1fr);
        grid-auto-flow: column; */
        
        border-radius: 25px;
        /* margin: 20px; */

        /* background-color: rgba(246, 248, 254, 1); */
        /* background-color: rgba(0, 0, 0, 0.4); */
        /* background-color: rgba(228, 238, 248, 0.6); */

        .bar{
            /* height: 3.5rem; */
            /* background-color: red; */
            display: grid;
            grid-template-columns: 10fr 1fr 10px 1fr;
            justify-content: end;
        }

        .functional{
            /* grid-row: 2 / span 2; */
            /* margin: 0; */
            display: flex;
            flex-direction: column;

            margin-bottom: 0;
            /* justify-content: space-around; */
        }

        .folders{
            /* grid-row: 4 / span 4; */
            display: flex;
            /* min-height: 200px; */
            /* flex-wrap: wrap;  */
            /*Only if cuadricula layout */
            /* justify-content: center;  */
            /*Only if cuadricula layout */
            overflow-x: scroll;
            max-height: 420px;
            /* border: 1px solid black; */
            border-radius: 15px;

            .noFolders{
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #a4abc8;
                font-weight: 900;
            }

            /* background: linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(88,37,105,1) 46%, rgba(217,144,213,1) 100%); */
            
        }

        .files{
            /* grid-row: 8 / span sadas; */
            display: flex;
            flex-direction: column;

            
        }
    }

    .content > * {
        margin: 20px;
    }

`;



