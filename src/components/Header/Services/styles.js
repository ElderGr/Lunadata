import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemsDetails = styled(Link)`
    text-decoration: none;
    margin-bottom: 3%;
    width: 280px;
    display: flex;
    padding: 0.5%;
    margin-right: 0.5%;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;

    &:hover{
        background-color: #424242;
    }

    >div:nth-child(1){
        width: 20%;
        display: flex;
        justify-content: center;
    }

    >div:nth-child(2){
        width: 80%;
    }

    >div>div{
        font-weight: 600;
        font-size: 14pt;
        margin-bottom: 4%;
    }

    >div>span{
        font-size: 11pt;
        color: rgb(173, 173, 173);
    }
`