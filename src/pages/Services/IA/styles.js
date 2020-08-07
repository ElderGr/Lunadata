import styled from "styled-components";
import { Form } from "@unform/web";

export const Container = styled.div`
    padding: 5%;
    /* height: 85vh; */

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
    height: 65vh;
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

export const ContactForm = styled(Form)`
    background-color: #FFFFFF;
    min-width: 400px;
    padding: 1.5%;
    border-radius: 5px;
    position: relative;
    top: 25%;
`