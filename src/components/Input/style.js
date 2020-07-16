import styled, {css} from 'styled-components';

export const Container = styled.div`
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

        ${props => props.isField && 
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

export const Error = styled.span``