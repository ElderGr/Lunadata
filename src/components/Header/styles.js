import styled from "styled-components";

export const Menu = styled.div`
    position: fixed;
    width: 100%;   
    z-index: 999;

    nav{
        background-color: #24252A;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.3% 2%;
    };

    div:nth-child(1){
        display: flex;
        align-items: center;

        padding: 0 1%;
    }
`;

export const MenuItens = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
            
    li{
        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;
        width: 100px;
        color: white;
        transition: .1s ease-in-out ;
        cursor: pointer;
        border-bottom-width: 0%;
        padding: 1% 0;
    };

    li:hover{
        color: #FF5733;
    }
`

export const MenuCollapse = styled.section`
    
    background-color: #fff;
    width: 100%;
    height: 350px;
    display: flex;
    

    > div:nth-child(1){
        display: flex;
        justify-content: center;    
        padding: 3% 1%;
        width: 25%;
        border-right: 0.5px solid rgb(226, 226, 226);

        font-size: 14pt;
    }

    > div:nth-child(2){
        padding: 1% 2%;
        width: 75%;
    }

    > div:nth-child(2)>div{
        display: flex;
        flex-wrap: wrap;
    }
`

export const ItemsDetails = styled.div`

    margin-bottom: 3%;
    width: 280px;
    display: flex;
    padding: 0.5%;
    margin-right: 0.5%;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: rgb(233, 233, 233);
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