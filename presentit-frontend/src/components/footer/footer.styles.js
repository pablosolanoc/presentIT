import styled, {css} from 'styled-components';


const FooterStyle = styled.div`
    /* font-family: RobotoMonoRegular; */
    font-size: 13px;
    width: 100%;
    

    background-color: #020202;
    color: #ffff;
    


    .content{
        /* width: 100%; */
        display: flex;
        justify-content: center;

        /* .flow-h{
            display: flex;
            flex-direction: column;
            text-align: center;
        } */
        .top{
            margin-top: 60px;
        }
        .bottom{
            margin-bottom: 30px;
        }
        .text{
            padding: 10px 0;
        }
        a{
            color: #3adbb4;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
        .linkPortfolio{
            &:hover{
                color: #3adbb4;
                text-decoration: underline;
            }
        }
    }
`;

export {FooterStyle};