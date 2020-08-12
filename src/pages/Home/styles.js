import styled, {keyframes} from 'styled-components';
import { Form } from "@unform/web";
import { lighten } from "polished";

import galaxy from "../../assets/background/galaxy.jpg";

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
        width: 600px;
        text-align: end;
        margin-right: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        z-index: 99;

        animation: 1.5s ${fadeIn} ease-in;

        h1{
            margin: 0;
            font-size: 2rem;
        }

        h2{
            font-size: 1rem;
            font-weight: 200;
            width: 25rem;
            margin: 3% 0 0 0;
        }

        a{
            margin-top: 5%;
        }
    }

    @media(min-width: 1025px){

    }

    @media(min-width: 769px) and (max-width: 1024px){

    }
    
    @media(max-width: 768px){
        > div:nth-child(2){
            text-align: center;
            margin-right: 0%;

            justify-content: center;

            >h1{
                font-size: 1.5rem;
                width: 20rem;
                align-self: center;
            }

            >h2{
                align-self: center;
                font-size: 1rem;
                width: 20rem;
            }

            a{
                align-self: center
            }
        }
    }
`;

export const ValuesSection = styled.section`
    height: 80vh;
    display: flex;
    padding-top: 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    >h2{
        margin: 0;
        font-size: 20pt;
    }

    >h3{
        font-weight: 300;
        width: 600px;
        text-align: center;
        margin-bottom: 4%;
        color: rgb(143, 143, 143);
    }

    div{
        display: flex;
        justify-content: center;
        width: 100%;

        div{
            display: flex;
            flex-direction: column;
            width: 350px;
        }

        svg{
            margin-right: 10%;
        }
    }
`

export const ValuesContainer = styled.div`
    width: 300px;
    margin: 0%;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p{
        line-height: 24px;
    }
`

export const PilarsSection = styled.section`
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 5%;

    >h2{
        margin: 0;
    }

    >h3{
        font-weight: 300;
        width: 600px;
        text-align: center;
        color: rgb(143, 143, 143);
    }

    >ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0;

        >li{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            
            padding: 2% 0;
            margin: 0 1%;

            transition: transform 0.2s;

            >&:hover{
                background: ${props => lighten(0.08, '#1C1F2A')};
                cursor: pointer;
                transform: translateY(10px);
            }

            >div{
                max-width: 250px;
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
    margin-top: 5%;
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
    top: 8%;
`