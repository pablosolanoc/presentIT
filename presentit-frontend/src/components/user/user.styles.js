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
        border: 3px solid #6a2afe;

        cursor: pointer;

        transition: all 0.2s ease-in-out;

        &:active{
            box-shadow: 2px 2px 10px rgba(0,0,0,0.3), -2px -2px 10px rgba(0,0,0,0.3);
            width: 70%;
        }
    }

    .subMenu{
        position: absolute;
        width: 9rem;
        /* height: 26rem; */
        background-color: rgba(236, 212, 242, 0.8);
        z-index: 1;
        border-radius: 12px;

        right: 5px;

        font-size: 1.2rem;

        .entry{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 2rem;
            
            border: 1px solid rgba(255, 212, 242, 1);
            border-radius: 12px;
            cursor: pointer;

            &:hover{
                background-color: rgba(236, 212, 242);
            }

            &:active{
                border: 2px solid rgba(235, 57, 65, 0.3);
            }

            transition: all 0.1s ease-in-out;
        }
    }
`;
