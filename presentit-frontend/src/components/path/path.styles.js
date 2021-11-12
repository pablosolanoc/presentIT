import styled, {css} from "styled-components";



export const PathStyle = styled.div`

    
    margin-top: 10px;
    color: red;
    
    display: flex;
    flex-wrap: wrap;
    /* background-color: red !important; */
    
    

    span{
        margin: 1rem 0;
        margin-right: 2rem;
    }

    
    
    .location{
        color: #a4abc8;
        font-weight: 900;
        
        max-width: 20rem;
        max-height: 2rem;
        /* overflow-x: scroll; */
        overflow-y: auto;
        padding: 0 10px;
        border-right-width: 0px;
        border-radius: 15px;
        transition: all 0.3s ease;
        /* background-color: red; */

        

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        &::-webkit-scrollbar {
           display: none;
        }
        
        &::after{
            content: '\\25B6';
        }

        margin-right: 2px;

        cursor: pointer;
        &:hover{
            background: rgba(243, 239, 249, 1);
        }
        &:active{
            background-color: rgba(0,0,0,0.5);
        }
        
        
    }

`;