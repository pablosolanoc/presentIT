import styled from 'styled-components';

export const ContentStyled = styled.div`
    grid-column: 5 / span asdas;

    @media(max-width: 769px){
        grid-column: 1 / span asdas;
        
    }
    /* height: 90%; */
    align-self: start;
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

    .layoutType0{
        
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
    }

    .layoutType1{
        
        /* width: 100%; */
        /* overflow-x: scroll; */
        display: flex;
        flex-wrap: wrap;
        border-radius: 15px;
        width: 100%;
    }

    .files{
        /* grid-row: 8 / span sadas; */
        display: flex;
        flex-direction: column;

        
    }

    & > * {
        margin: 20px;
    }
`;

    

