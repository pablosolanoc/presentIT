import styled from 'styled-components';

const PrivacyPolicyStyle = styled.div`

    text-align: justify;
    
    display: grid;
    /* justify-content: center; */

    grid-template-columns: 10vw 80vw 10vw;
    grid-template-rows: 5vw 1fr 10vw;
    /* color: white; */

    h1,h2{
        
        font-weight: 900;
    }

    h2{
        margin: 10px;
    }

    .logo{
        display: flex;
        justify-content: center;
        /* justify-self: center; */
        .image{
            width: 9rem;
            height: auto;
        }
    }

    .centerPiece{
        grid-column: 2;
        grid-row: 2;
        padding: 30px;
        /* width: 70vw; */
        border-radius: 25px;
        /* height: 70vh; */
        background-color: white;
    }
`;


export default PrivacyPolicyStyle;