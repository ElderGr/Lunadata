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

    li>a{
        text-decoration: none;
        color: #fff;
    }

    li>a:hover{
        color: #FF5733;
    }
`

export const MenuCollapse = styled.section`
    
    background-color: #24252A;
    width: 100%;
    height: 350px;
    display: flex;
    color: #F1F1F1;
    border-top: 0.5px solid #424242;

    > div:nth-child(1){
        display: flex;
        justify-content: center;    
        padding: 3% 1%;
        width: 25%;
        border-right: 0.5px solid #424242;

        font-size: 14pt;
    }

    > div:nth-child(2){
        padding: 1% 2%;
        width: 75%;
        overflow-y: overlay;
    }

    > div:nth-child(2)>div{
        display: flex;
        flex-wrap: wrap;
    }
`