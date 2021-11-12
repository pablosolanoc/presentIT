import styled from "styled-components";

export const UserStyle = styled.div`

    width: 4rem;
    /* background-color: green; */

    grid-column: 4;

    position: relative;

    img{
        width: 80%;
        border-radius: 50%;
        padding: 2px;
        border: 2px solid rgba(106, 42, 254, 1);

        cursor: pointer;

        transition: all 0.2s ease-in-out;

        &:active{
            box-shadow: 2px 2px 10px rgba(0,0,0,0.3), -2px -2px 10px rgba(0,0,0,0.3);
        }
    }

    .subMenu{
        position: absolute;
        width: 15rem;
        height: 26rem;
        background-color: salmon;
        z-index: 1;
        border-radius: 20px;

        right: -10px;
    }
`;
