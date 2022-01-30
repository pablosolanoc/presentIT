import styled from "styled-components";



export const CanvasStyle = styled.canvas`
    /* width: 100%; */
    width: 100%;
    /* width: 100%; */

    /* background-color: green; */
    /* position: absolute; */
    /* top: 10%; */
    /* left: 0px; */

    /* display: flex; */
    /* justify-content: center; */
`;

export const CanvasHolder = styled.div`
    width: 80%;
    position: relative;

    .go{
        width: 3rem;
        height: 9rem;
        bottom: 40%;

        background-color: rgba(106, 42, 254, 0.4);

        display: flex;
        justify-content: center;
        align-items: center;
        
        &:hover{
            background-color: rgba(106, 42, 254, 1);
            cursor: pointer;
        }
        
        transition: all 0.15s ease-in-out;

    }

    .arrow{
        /* height: 100%; */
        fill: white;
    }

    .goLeft{
       
        
        
        left: -3.25rem;
        position: absolute;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }

    .goRight{
        right: -3.25rem;
        position: absolute;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
`;
