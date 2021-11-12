import styled from "styled-components";


export const SearchBarStyle = styled.div`

    position: relative;
    transition: all 0.3s ease;
    /* height: 40%; */

    &:hover{
        fill: rgb(106, 42, 254);
    }

    .search{
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        background-color: rgba(241, 243, 244, 1);
        border-radius: 5px;
        /* min-width: 200px; */
        /* padding: 10px; */
        transition: all 0.3s ease;
        /* border: 1px solid pink; */
        &:hover{
            border: 3px solid rgb(106, 42, 254);
        }
    }

    .lupa{
        width: 2rem;
        height: auto;
        position: absolute;
        right: 10px;
        top: 0.6rem;
    }
`;