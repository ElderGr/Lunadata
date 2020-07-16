import styled,{css, keyframes} from "styled-components";
import { Form } from "@unform/web";

import galaxy from "./assets/background/galaxy.jpg";

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0rem);
    }
`

export const Container = styled.div`
    background-color: #272727;
    min-width: 350px;
    max-width: 400px;
    min-height: 200px;
    max-height: 250px;
    display: flex;
`;

export const Input = styled.div`
    margin: 3% 0;
    border: solid 1px #E5E5E5;
    border-radius: 2.5px;
    position: relative;
    height: 50px;
    transition: 0.2s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    label{
        display: flex;
        flex-direction: column;

        position: absolute;
        left: 2%;
        top: 25%;
        color: #6C6C6C;
        transition: .2s ease-in-out;

        ${props => props.hasValue && 
            css`
                font-size: 10pt;
                top: 2px;
                transition: .2s ease-in-out;
            `
        }
    }

    input{
        padding: 10px;
        border: none;
        font-size: 12pt;
    }

    &:focus-within{
        border-color: #505050;

        label{
            font-size: 10pt;
            top: 2px;
            transition: .2s ease-in-out;
        }
    }
`; 

export const IntroSection = styled.section`
    height: 92vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    position: relative;

    background: url(${galaxy}) no-repeat center fixed;
    background-size: cover;

    div:nth-child(1){
        background: rgba(0,0,0,.15);
        width: 100%;
        height: 100%;
        
        position: absolute;
    }

    div:nth-child(2){
        width: 600px ;
        text-align: end;
        margin-right: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        z-index: 99;

        animation: 1.5s ${fadeIn} ease-in;

        h1{
            margin: 0;
            font-size: 25pt
        }

        h2{
            font-size: 12pt;
            font-weight: 200;
            width: 400px;
            margin: 2% 0 0 0;
        }

        a{
            margin-top: 5%;
        }
    }
`;

export const ValuesSection = styled.section`
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    div{
        display: flex;
        justify-content: space-around;
        width: 100%;

        div{
            display: flex;
            flex-direction: column;
            width: 350px;
        }
    }
`

export const ValuesContainer = styled.div`
    width: 300px;
    margin: 2%;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const PilarsSection = styled.section`
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    ul{
        list-style: none;
        display: flex;

        li{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            div{
                max-width: 200px;
                word-wrap: break-word;
                margin-top: 3%;
                text-align: center;
                color: rgb(143, 143, 143);
            }
        }
    }
` 

export const ContactSection = styled.section`
    height: 65vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ContactForm = styled(Form)`
    background-color: #FFFFFF;
    min-width: 400px;
    padding: 1.5%;
    border-radius: 5px;
`