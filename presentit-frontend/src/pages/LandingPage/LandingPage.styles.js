import styled from "styled-components";


const LandingPageStyles = styled.div`

    width: 100vw;
    height: 100vh;

    justify-self: center;
    /* background-color: black; */

    display: grid;

    grid-template-columns: repeat(8, 1fr);

    justify-content: center;
    align-items: center;

    .centralPiece{
        grid-column: 2 / span 6;
        height: auto;
        /* background-color: red; */

        display: flex;
        /* justify-content: space-between; */

        @media(max-width: 769px){
            flex-direction: column-reverse;
            /* flex-flow: reverse; */
            flex-wrap: wrap;
            .info{
                width: 100%;
            }
        }
        
        .section{
            width: 100%;
            /* height: auto; */
            margin: 1rem 0;
        }

        .info{
            width: 40%;
            min-height: 350px;
            background-color: white;
            padding: 4rem;
            background-color: rgba(255,255,255, 0.8);
            display: flex;
            flex-direction: column;
            border-radius: 4rem;
            box-shadow: 6px -3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px rgba(0, 0, 0, 0.2);

            @media(max-width: 769px){
                
                width: 100%;
                padding: 1rem;
            }
            
            .logo{
                /* background: red; */
                height: 7rem;
                .logoImage{
                    height: 100%;
                    width: 100%;
                }
            }
            .title{
                font-size: 3vw;
                font-weight: 300;
            }
            #itPart{
                font-size: 3.1vw;
                font-weight: 900;
            }
            
            .slogan{
                font-size: 1.6rem;
                font-weight: 800;
                /* height: 4rem; */
            }

            .description{
                text-align: justify;
                font-size: 1.1rem;
                .itPartDescription{
                    font-weight: 900;
                }
            }
            .link{
                &:hover{
                    font-size: 1.9rem;
                }
                transition: all 0.2s ease-in-out;
            }
            .privacy{
                font-size: 0.8rem;
                text-align: end;
            }
        }

        .animation{
            display: flex;
            justify-content: end;
            align-items: center;
            width: 50%;
            height: auto;
            
            /* background: blue; */
            
            @media(max-width: 769px){
                margin: 5vw 0;
                width: 100%;
                justify-content: center;
                padding: 1rem;
                /* height: 100%; */
            }
        }
    }

    

`;

export default LandingPageStyles;
