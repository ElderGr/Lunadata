import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #24252A;
    padding: 7% 2% 6% 2%;
    color: #fff;    

    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    @media(min-width: 1025px){

    }

    @media(min-width: 769px) and (max-width: 1024px){

    }

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-align: center;

        > div{
            margin-top: 4%;
        }
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    > a > div{
        width: 50px;
    }

    > a > div > img{
        width: 100%;
    }
`
