import styled from "styled-components";

const PresenitAnimationStyles = styled.div`
        /* width: 30%; */
        position: relative;
        /* background: white; */
        width: 90%;
        height: auto;
        min-height: 25vw;
        display: flex;
        justify-content: center;
        align-itmes: center;

        
        @media(max-width: 769px){
            width: 50%;
            margin: 0 0 100px 0;
        }

        .holder{
            display: flex;
            width: 45%;
            height: 70%;
            flex-wrap: wrap;
            background-color: rgba(0, 158, 165, 0.6);
            justify-content: center;
            align-items: start;
            position: absolute;
            
            
            
            border: 4px solid #7B61FF;
            box-sizing: border-box;
            border-radius: 15px;

            .hoverOn{
                &:hover{
                    border: 0.3rem solid rgba(0,0,0,0.6);
                }
                transition: all 0.2s ease-in-out;
            }  

            .hoverOnImage{
                &:hover{
                    border: 0.3rem solid rgba(0,0,0,0.6);
                    
                    .signInHover{
                        visibility: visible;
                    }
                    
                }
                transition: all 0.2s ease-in-out;
            }
             
            .signInHover{
                position: absolute;
                top: -30px;
                right: 0px;
                visibility: hidden;
                /* z-index: 10; */
                padding: 4px;
                border-radius: 15%;
                background: white;
                &:active{
                    font-size: 0.8rem;
                    color: black;
                }
                &:hover{
                    cursor: pointer;
                }
                transition: all 0.2s ease-in-out;
            }
            
        }

         
        
        .op{
        opacity: 0.6; 
        opacity: initial;
        }

        #holder4{
            
            transform: matrix(1, -0.58, 0, 0.89, 0, 0);
            top: 50%;
            left: 50%;
            z-index: 4;
        }

        #holder3{
            transform: matrix(1, 0.58, 0, 0.89, 0, 0);
            top: 50%;
            left: 0%;
            z-index: 3;
        }
        #holder2{
            transform: matrix(-1, -0.58, 0, 0.89, 0, 0);
            top: 0;
            left: 50%;
            z-index: 1;
        }
        #holder1{
            transform: matrix(-1, 0.58, 0, 0.89, 0, 0);
            top: 0;
            left: 0%;
            z-index: 2;
        }
        
        .title{
            display: flex;
            width: 100%;
            height: 20%;
        /*     background-color: red; */
            justify-content: center;
        }
        
        .logo{
            width: 5rem;
            position: relative;
            border-radius: 15%;
        /*   height: auto; */
        /*     background-color: purple; */
        }
        .logoImage{
            height: 100%;
            width: auto;
        }
        
        @media(max-width: 769px){
            .logoImage{
                /* height: 100%; */
                width: 2rem;
            }
        }

        .cuerpo{
            width: 100%;
            height: 70%;
        /*     background-color: blue; */
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        
        .sideBar{
            width: 20%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .selected{
        width: 90%;
        height: 1rem;
        background-color: #F4F4F4;
        }
        
        .content{
            width: 60%;
            height: 100%;
        /*     background-color: red; */
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .structures{
        background-color: rgba(255, 255, 255, 1);
        border-radius: 15px;
        box-shadow: inset 2px -4px 4px rgba(0, 0, 0, 0.25);
        }
        
        .folders{
            width: 90%;
            height: 30%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .folder{
        width: 25%;
        height: 60%;
        background-color: #F4F4F4;
        border-radius: 15px;
        }
        .folder2{
        width: 35%;
        }
        
        .files{
            width: 8rem;
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            
        }
        
        .file{
        border-radius: 15px;
        }

        .startTable{
        height: 20%;
        }

        
        .presentation{
            width: 70%;
            height: 55%;
            /* max-height: 9rem; */
            
            background-color: rgba(58, 219, 180, 1);
            
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -30% 0 0 -35%;
            
            animation-delay: 3s;
            animation-duration: 3s;
            animation-name: slidein;
            animation-iteration-count: infinite;
            
            display: flex;
            flex-direction: column;
            
            box-shadow: inset 6px -4px 4px rgba(0, 0, 0, 0.1), inset 4px -4px 4px rgba(0, 0, 0, 0.15), -20px -20px 10px rgba(0, 0, 0, 0.2);
            
        }

        #presentation2{
            animation: slidein 3s ease-in-out 3.3s infinite,
                        disapear 3s ease-in-out 3.3s infinite;
        }
        #presentation3{
            animation: slidein 3s ease-in-out 3.3s infinite,
                        disapear 3s ease-in-out 3.3s infinite;
        }

        .header{
        width: 100%;
        height: 30%;
        /*   background-color: black; */
        display: flex;
        align-items: center;
        }
        .obscurePart1{
        width: 60%;
        height: 70%;
        margin-left: 1rem;
        background: #33C4A1;
        /* border: 0.5rem solid rgba(0,0,0, 0.07); */
        box-sizing: border-box;
        border-radius: 35px;
        }

        .body{
        width: 100%;
        height: 70%;
        display: flex;
        /*   flex-direction: row; */
        /*   background-color: blue; */
        }

        .leftPart{
            width: 30%;
            height: 70%;
            
            margin: auto auto;
            /*   background-color: blue; */
            background: #33C4A2;
            
            border-radius: 15px;
        }
        .rightPart{
        width: 50%;
        height: 80%;
        margin: auto auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        /*   margin-left: auto; */
        /*   background-color: blue; */
        }

        .thingy{
            width: 100%;
            height: 23%;
            background: #33C4A2;
            
            
            border-radius: 15px;
        }

        .thingy2{
            height: 30%;
        }
        /* #presentation1{
        animation-duration: 3s;
        animation-name: slidein;
        animation-iteration-count: infinite;  
        } */

        .otherPresentation{
            animation-delay: 3.5s;
        }

        .user{
            position: absolute;
            top: 60%;
            right: -5%;
            width: 10%;
            height: 10%;
            border-radius: 50%;
            /*   z-index: 10; */
            background: rgba(106, 42, 254, 1);
            box-sizing: border-box;
            box-shadow: -40px -40px 4px rgba(0, 0, 0, 0.25);
            opacity: 1 !important;
            
            animation: movearound 3s ease-in-out 0s ,
            /*             press 1s ease-in-out 1s, */
                        press 3s ease-in-out 3s infinite;
            /*   animation-iteration-count: infinite; */
        
        }

        .toZeroWidth  *{
            animation-delay: 3s;
            animation-duration: 3s;
            animation-name: disapear;
            animation-iteration-count: infinite;
        }



        @keyframes slidein {
        from {
            
        }
        30% {
            margin-left: 100%;
            width: 0;
        }
        35%{
            margin-left: -60%;
            width: 0;    
        }
        50%{
            margin-left: -60%;
            width: 0;    
        }
        to {
            margin-left: -35%;
            width: 70%;
        }
        }

        @keyframes movearound {
        from {
            top: 100%;
            left: 5%;
        }
        45% {
            top: 90%;
            left: 50%;
        }
        70% {
            top: 70%;
            left: 75%;
        }

        100% {
            top: 60%;
            left: 95%;
        }
        
        }
        @keyframes press {
        from {
            width: 10%;
            height: 10%;
        }
        10% {
            width: 7%;
            height: 7%;
            top: 65%;
            right: -10%;
        }

        50% {
            width: 10%;
            height: 10%;
        }
        
        }

        @keyframes disapear {
            from {
                
            }
            
            45% {
                /* border: 100%; */
            }
            50%{
                border: 0;
            }
            
            /* 80%{
                border: 100%;
            } */

        }

`;

export default PresenitAnimationStyles;