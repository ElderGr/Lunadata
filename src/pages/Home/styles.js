import styled, {keyframes} from 'styled-components';
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
    display: flex;
    padding: 7% 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    >h2{
        margin: 0;
        font-size: 1.6rem;
    }

    >h3{
        font-weight: 300;
        width: 600px;
        text-align: center;
        margin-bottom: 4%;
        color: rgb(143, 143, 143);
    }

    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        > div{
            display: flex;
            flex-direction: column;
            width: 350px;
        }

        > svg{
            margin-right: 10%;
            width: 400px;
            height: 400px;
        }
    }

    @media(min-width: 1025px){

    }

    @media(min-width: 769px) and (max-width: 1024px){
        > div{
            align-items: center;
        }
    }

    @media(max-width: 768px){
        > &{
            padding: 10% 0;
        }
        > h3{
            width: 85%;
        }

        > div{
            flex-direction: column;
            align-items: center;

            > svg{
                width: 15rem;
                height: 15rem;
                margin: 0;
            }

            > div {
                align-items: center;
            }
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 5% 0;

    >h2{
        margin: 0;
    }

    >h3{
        font-weight: 300;
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
            > a{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                
                text-decoration: none;
                padding: 2% 0;
                margin: 0 1%;

                transition: transform 0.2s;
                &:hover{
                    background: ${props => lighten(0.08, '#1C1F2A')};
                    cursor: pointer;
                    transform: translateY(10px);
                }

                >span{
                    color: #fff;
                }
                >div{
                    max-width: 15rem;
                    word-wrap: break-word;
                    margin-top: 3%;
                    text-align: center;
                    color: rgb(143, 143, 143);
                }
            }

        }
    }

    @media(min-width: 1025px){

    }

    @media(min-width: 769px) and (max-width: 1024px){

    }

    @media(max-width: 768px){
        > &{
            padding: 10% 0;
        }
        > h3{
            width: 85%;
        }
    }
` 

export const ContactSection = styled.section`
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

    @media(min-width: 1025px){

    }

    @media(min-width: 769px) and (max-width: 1024px){

    }

    @media(max-width: 768px){
        > &{
            padding: 10% 0;
        }

        >div{
            display: flex; 
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 10%;

            > h3{
                width: 85%;
                margin: 0;
            }
        }
    }
`