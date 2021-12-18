import styled, {css} from 'styled-components';

const FolderStyle = css`
    display: flex;
    background-color: ${p => p.mine ? `rgba(106, 42, 254, 1)` : `rgba(30, 168, 247, 1)`};
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.6);
    transition: all 0.3s ease;

    pointer-events: ${p => p.disabled ? 'none' : 'auto'};
    /* pointer-events: none; */
    cursor: pointer;

    &:hover{
        box-shadow: 10px 10px 10px rgba(0,0,0,0.6);
        border: 1px solid rgba(255,255,255,0.4);
    }

    &:active{
        box-shadow: -6px -6px 10px rgba(0,0,0,0.3), 10px 10px 10px rgba(0,0,0,0.3);
    }
`;

export const FolderStyleBig = styled.div`

    ${FolderStyle}


    min-width: 15rem;
    padding: 15px;
    /* height: 20vh; */
    
    margin: 1.3rem 1.5rem;
    

    align-items: start;
    justify-content: space-evenly;

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
    /* display: flex; */
`;

export const FolderStyleThin = styled.div`
    
    ${FolderStyle}

    min-width: 8rem;
    
    margin: 5px;
    padding: 10px;

    color: white;
    fill: white;

    .logos{
        margin: 3px 0; 
        display: flex;
        justify-content: space-around;
        /* width: 30%; */
        .folderNormal{
            /* width: 30%; */
            fill: white;
        }
        .plataformImage{
            
            width: 30%;
            img{
                width: 20px;
            }
            /* display: none; */
        }
        .info{
            width: 40px;
            display: flex;
            .numberPresentations{
                display:flex;
                width: 70%;
            }
            .mine{
                width: 30%;
                
            }
        }
    }
    .name{
        /* width: 100%; */
    }
    
`;