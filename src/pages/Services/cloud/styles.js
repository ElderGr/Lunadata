import styled from "styled-components";

export const Container = styled.div`
    padding: 5%;

    >section{
        display: flex;

        > div:nth-child(2){
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            width: 50%;
            
            margin-left: 2.5%;
        }
    }
`;

export const ContactSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: relative;
    text-align: center;

    >div{
        
        >h2{
            color: #fff;
        }
        >h3{
            color: rgb(143, 143, 143);
        }
    }
`