import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background-color: ${props => props.outline ? 'rgba(0,0,0,.01)' : props.color};
    border: ${props => props.outline ? `1.5px solid ${props.color}` : 'none'};
    padding: 15px;
    border-radius: 5px;
    color: ${props => props.outline ? props.color : '#fff'};
    text-align: center;
    font-size: 11.5pt;
    transition: .1s ease-in-out;
    width: ${props => props.width ? props.width : '100%'};
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        color: #fff;
        background: ${props => shade(0.10, props.color)};
    }
`;