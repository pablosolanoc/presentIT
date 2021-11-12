import styled from "styled-components";

export const SideBarStyle = styled.div`

    display: grid;
    /* justify-content: center; */
    align-items: center;

    font-size: 1.3rem;

    grid-template-rows: 3fr 1fr 1fr 1fr 0.5fr 1fr 10fr;

    width: 100%;
    height: 100%;

    box-shadow: 6px -3px 10px rgba(0, 0, 0, 0.2);

    transition: all 0.1s ease-in;

    &:hover{
        box-shadow: 0px 0px 10px rgba(0,0,0,0);
    }
    border-radius: 20px;
    @media(max-width: 564px){
        display: flex;
        flex-direction: column;
    }

    .logo{
        width: 100%;
        img{
            width: 70%;
        }
        
        @media(max-width: 564px){
            width: 40%;
        }
    }

    /* background-color: rgba(255, 255, 255, 0.4); */

    .config{
        cursor: pointer;
        /* border-radius: 20px; */
        height: 90%;
        

        /* width: 90%; */

        display: flex;

        justify-content: center;
        align-items: center;

        color: rgba(106, 42, 254, 1);

        &:hover{
            background: rgba(243, 239, 249, 1);
        }

        @media(max-width: 769px){
            height: 3rem;
        }

        @media(max-width: 564px){
            width: 100%;
        }
    }

    .selected{
        background-color: rgba(106, 42, 254, 0.2);
        border-left: 4px solid rgba(106, 42, 254, 1);
        &:hover{
            background-color: rgba(106, 42, 254, 0.4);
        }

        @media(max-width: 564px){
            border-left: 0;
            border-top: 4px solid rgba(106, 42, 254, 1);
            border-radius: 15px;
        }

        transition: all 0.1s ease-in;
    }

    @media(max-width: 769px){
        grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr 1fr 0.5fr;
        grid-template-rows: 1fr;
    }

`;