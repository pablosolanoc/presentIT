import styled from "styled-components";

export const SideBarStyle = styled.div`

    display: grid;
    /* justify-content: center; */
    align-items: center;

    font-size: 1.3em;

    grid-template-rows: 15rem 5rem 5rem 5rem 4rem 5rem 10rem;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 189, 177, 0.4);
    

    box-shadow: 6px -3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px rgba(0, 0, 0, 0.2);

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
        
        .logoImage{
            width: 70%;
            height:auto;
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
        /* max-height: 90%; */
        
        border-radius: 0 15px 15px 0;

        /* width: 90%; */

        display: flex;

        justify-content: center;
        align-items: center;

        color: rgba(0, 0, 0, 0.9);

        &:hover{
            background: rgba(58, 219, 180, 1);
        }

        @media(max-width: 769px){
            height: 3rem;
        }

        @media(max-width: 564px){
            width: 100%;
        }
        transition: all 0.05s ease-in;
    }

    .selected{
        background-color: rgba(58, 219, 180, 0.9);
        border-left: 7px solid rgba(0, 158, 165, 1);
        color: white;
        font-weight: 600;

        &:hover{
            background-color: rgba(58, 219, 180, 1);
        }

        @media(max-width: 564px){
            border-left: 0;
            border-top: 4px solid rgba(0, 158, 165, 1);
            border-radius: 15px;
        }

        transition: all 0.1s ease-in;
    }

    @media(max-width: 769px){
        grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr 1fr 0.5fr;
        grid-template-rows: 1fr;
    }

`;