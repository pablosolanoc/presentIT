import styled from "styled-components";


export const TableStyle = styled.div`

    /* width: 100%; */
    /* background-color: red; */
    align-self: center;
    margin-top: 2rem;

    width: 80%;

    display: flex;
    justify-content: center;
    /* grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr); */

    text-align: start;

    #table-sortable{
        /* width: 100%; */
        /* border: 0; */
        transition: all 0.3 ease-in-out;
        /* grid-column: 1 / span asdas; */
        display: grid;
        grid-template-rows: repeat(2, auto);
        min-width: 100%;
        overflow-x: auto;
        /* grid-template-rows: repeat(8, 1fr); */
    }

    .cell{
        padding-left: 1.5rem;
    }


    .row{
        cursor: pointer;

        display: grid;
        grid-template-columns: 4fr 1fr 1fr;
        height: 4rem;
        max-height: 4rem;
        overflow-y: auto;
        justify-content: center;
        align-items: center;
        border-radius: 20px;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        &::-webkit-scrollbar {
           display: none;
        }

        transition: all 0.05s ease-in-out;

        &:hover{
            background: rgba(243, 239, 249, 1);
        }

        
    }

    #header{
        margin-bottom: 2rem;
        color: rgba(32, 60, 61, 1);
        font-weight: 900;
        background-color: rgba(0, 189, 177, 0.3);
        border-radius: 20px;
    }

    #body{
        
        overflow-y: auto;
        max-height: 70vh;   
        background-color: rgba(0, 189, 177, 0.1);
        border-radius: 15px;
        .name{
            color: #000;
            font-weight: 900;
            display: grid;
            /* min-width: 2rem; */
            
            grid-template-columns: 2fr 15fr;

            align-items: center;
            .typeFile{
                justify-self: center;
                width: 100%;
                img{
                    width: 70%;
                }
            }

            .nameText{
                max-width: 20rem;
                overflow-x: auto;
            }
        }
        .owner,.lastOpen{
            color: rgba(32, 60, 61, 1);
            font-weight: 400;
        }
    }
    


    #table-sortable .headerCell {
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius: 15px;
    }
    
    #table-sortable .th-sort-asc::after {
        content: "\\25b4";
    }

    #table-sortable .th-sort-desc::after {
        content: "\\25be";
    }

    #table-sortable .th-sort-asc::after,
    #table-sortable .th-sort-desc::after {
        margin-left: 5px;
    }

    #table-sortable .th-sort-asc,
    #table-sortable .th-sort-desc {
        background: rgba(0, 0, 0, 0.1);
    }


    table { border-collapse: separate; }
    td { border: solid 1px #000; }
    tr:nth-child(1) td:first-child { border-top-left-radius: 5px; border-bottom-left-radius: 5px; }
    tr:first-child td:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px; }
    tr:last-child td:first-child { border-bottom-left-radius: 10px; }
    tr:last-child td:last-child { border-bottom-right-radius: 10px; }

    .name{
        max-width: 30rem;
        min-width: 21rem;
        /* overflow-x: auto; */
    }

    .owner{
        max-width: 15rem;
        min-width: 9rem;
    }

    .lastOpen{
        max-width: 15rem;
        min-width: 9rem;
    }

    .noFiles{
        width: 100%vw;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #a4abc8;
    }

`;


  