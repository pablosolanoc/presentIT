import styled from "styled-components";


const Margins = styled.div`
    /* margin: 3vw 10vw; */

    display: grid;

    grid-template-columns: 10vw 80vw 10vw;
    grid-template-rows: 10vh auto 10vh;
    /* background: linear-gradient(158deg, rgba(205,235,245,1) 0%, rgba(222,205,226,1) 100%); */
   
    .hidden{
        display: none;
        /* background-color: red; */
    }
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 900;

    align-self: start;
`;

export {Margins, Title};