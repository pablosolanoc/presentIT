import styled, {css} from 'styled-components';



export const FolderStyle = styled.div`
    min-width: 15rem;
    padding: 15px;
    /* height: 20vh; */
    border-radius: 15px;
    margin: 1.3rem 1.5rem;
    cursor: pointer;
    background-color: ${p => p.mine ? `rgba(106, 42, 254, 1)` : `rgba(30, 168, 247, 1)`};
    

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    transition: all 0.3s ease;

    box-shadow: 3px 3px 10px rgba(0,0,0,0.6);

    

    .logos{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        /* height: 80px; */
        .folderNormal{
            width: 40%;
            height: auto;
            /* margin: 10px 20px; */
            fill: rgba(255,255,255, 0.6);
        }
        .plataformImage{
            width: 4.5rem;
            height: 4.2rem;
            border-radius: 20px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 3rem;
            }
        }

        
    }

    .name{
        width: 80%;
        margin: 10px 0 10px 10px;
        align-self: start;
        text-align: start;
        color: white;
        font-size: 1.1rem;
    }

    .info{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin: 15px 0;
        .numberPresentations{
            font-size: 1.5rem;
            color: white;
            .presentationImage{
                width: 3rem;
                height: auto;
                fill: rgba(255, 167, 96, 1);
            }
        }
        .mine{
            width: 3rem;
            height: auto;
            fill: white;
        }
    }

    &:hover{
        box-shadow: 10px 10px 10px rgba(0,0,0,0.6);
        border: 1px solid rgba(255,255,255,0.4);
    }

    &:active{
        box-shadow: -6px -6px 10px rgba(0,0,0,0.3), 10px 10px 10px rgba(0,0,0,0.3);
    }

    /* display: flex; */
`;