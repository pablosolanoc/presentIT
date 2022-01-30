import styled from "styled-components";


const LoadingStyles = styled.div`
    
    display: flex;

    justify-content: center;
    align-items: center;



    width: 100%;
    height: 15rem;

    .circle{
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        border: 10px solid rgba(106, 42, 254, 0.4);

        border-left-color: rgba(106, 42, 254, 0.9);
        animation: 1.5s spin infinite linear;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.2 ease-in-out;
    }

    .multi-ripple {
        width: 7rem;
        height: 7rem;
        margin: 2rem;
        /* background-color: blue; */

        div {
            position: absolute;
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
            border: 8px solid rgba(106, 42, 254, 1);
            animation: 1.5s ripple infinite;

            &:nth-child(2) {
             animation-delay: 0.5s;
             opacity: 0;
            }
        }

        @keyframes ripple {
            from {
                transform: scale(0);
                opacity: 1;
            }

            to {
                transform: scale(1);
                opacity: 0;
            }
        }
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

`;

export default LoadingStyles;
