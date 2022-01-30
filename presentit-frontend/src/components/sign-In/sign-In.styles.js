import styled from "styled-components";


const SignInStyle = styled.div`
    

    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    a{
        text-decoration: none;
        color: black;

        
    }

    .buttonSignIn{
        height: 3.5rem;
        width: 100%;
        min-width: 60px;
        background-color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;

        border-radius: 35px;

        box-shadow: 0px 5px 6px rgba(0,0,0,0.3);

        &:hover{
            box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
        }

        &:visited{
            color: black;
        }

        &:active{
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            color: rgba(30, 168, 247, 1);
            height: 2rem;
        }

        .text{
            @media(max-width: 900px){
                display: none;
            }
            
        }

        img{
            height: 80%;
        }

        transition: all 0.4s ease-in-out;
    }

`;

export {SignInStyle};