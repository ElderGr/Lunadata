import styled, {css} from 'styled-components';

export const Container = styled.div`
    margin: 3% 0;
    border: solid 1px #E5E5E5;
    border-radius: 2.5px;
    position: relative;
    height: 200px;
    transition: 0.2s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    ${props => 
        props.isErrored && 
        css`
            border-color: #c53030;
        `}

    label{
        display: flex;
        flex-direction: column;

        position: absolute;
        left: 2%;
        top: 2%;
        color: #6C6C6C;
        transition: .2s ease-in-out;

        ${props => props.isField && 
            css`
                font-size: 9pt;
                top: 2px;
                transition: .2s ease-in-out;
            `
        }
    }

    > textarea{
        padding: 10px;
        padding-top: 20px;
        border: none;
        font-size: 12pt;
        height: 100%;
    }

    &:focus-within{
        border-color: #505050;

        label{
            font-size: 9pt;
            top: 2px;
            transition: .2s ease-in-out;
        }
    }
`; 

export const Error = styled.span``