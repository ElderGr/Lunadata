import styled from 'styled-components';
import { Form } from '@unform/web';

export const ContactForm = styled(Form)`
    background-color: #FFFFFF;
    min-width: 300px;
    width: 400px;
    padding: 2.5%;
    border-radius: 5px;
    margin: 2.5% 0;

    @media(min-width: 1025px){

    }

    @media(min-width: 769px) and (max-width: 1024px){

    }

    @media(max-width: 768px){
        width: 300px;
        position: relative;
    }
`

export const CheboxContainer = styled.div`
    display: flex;
    margin: 5% 0;
`