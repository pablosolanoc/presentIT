import styled from "styled-components";

export const TypeLayoutStyle = styled.div`

    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: end;
    align-items: center;

    grid-column-start: 2;

    .types{
        width: 5rem;
        /* height: 3rem; */
        /* background-color: blue; */
        

        display: flex;

        & > *{
            /* border: 1px solid rgba(58, 219, 180, 1); */
            width: 3rem;
            height: 2.2rem;
            background-color: white;
        }

        .both{
            transition: all 0.3s ease;
            cursor: pointer;
            &:hover{
                background-color:  rgba(58, 219, 180, 0.3);
            }
            &:active{
                background-color:  rgba(58, 219, 180, 0.6);
                box-shadow: 1px 1px 3px rgba(0,0,0, 0.3);
            }
        }

        .selected{
            background-color: rgba(58, 219, 180, 1);
            box-shadow: 2px 2px 3px rgba(0,0,0, 0.3), -2px -2px 3px rgba(0,0,0, 0.3)
                        , 2px -2px 3px rgba(0,0,0, 0.3), -2px 2px 3px rgba(0,0,0, 0.3);

            fill: white;
        }

        .row{
            margin: 4px 2px;
            
            /* background-color: white; */
            

            border-radius: 5px;

            display: grid;
            align-items: center;
            justify-content: center;
            
            /* grid-column-gap: 2px; */

            grid-template-columns: 0.5fr 2fr 2fr 2fr 0.5fr;
            grid-template-rows: 1fr 2fr 1fr;
            /* display: */
            .square{
                width: 80%;
                height: auto;
                border-radius: 2px;
                background-color: black;
               
            }

            #square1{
                grid-row-start: 2;
                grid-row-end: 2;
                grid-column-start: 2;
                grid-column-end: 2;
            }
            #square2{
                grid-row-start: 2;
                grid-row-end: 2;
                grid-column-start: 3;
                grid-column-end: 3;
            }
            #square3{
                grid-row-start: 2;
                grid-row-end: 2;
                grid-column-start: 4;
                grid-column-end: 4;
            }

            

        }


        .columnRow{
            margin: 4px 2px;
            border-radius: 5px;
            
            

            display: grid;
            grid-template-columns: 15% 30% 10% 30% 15%;
            grid-template-rows: 15% 30% 10% 30% 15%;

            .square{
                width: 100%;
                height: auto;
                border-radius: 2px;
                
            }

            #square1{
                grid-row-start: 2;
                grid-row-end: 2;
                grid-column-start: 2;
                grid-column-end: 2;
            }
            #square2{
                grid-row-start: 4;
                grid-row-end: 4;
                grid-column-start: 4;
                grid-column-end: 4;
            }
            #square3{
                grid-row-start: 2;
                grid-row-end: 2;
                grid-column-start: 4;
                grid-column-end: 4;
            }
            #square4{
                grid-row-start: 4;
                grid-row-end: 4;
                grid-column-start: 2;
                grid-column-end: 2;
            }

        }
    }
`;