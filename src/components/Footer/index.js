import React from "react";

import { StyledFooter } from "./styles";

import Logo from "../../assets/Logo";

export default function Footer(props){
    return(
        <StyledFooter>
            <div>
                <Logo width={200} height={200} />
            </div>
            
            <div>
                <h3>Contatos</h3>
                <p>
                    Telefone: (11) 98747-3887
                </p>
                <p>
                    Email: gbielrs@gmail.com
                </p>
            </div>
            
            <div>
                <h3>Endereço</h3>
                <p>
                    Estrada dos Mirandas, 210
                </p>
            </div>
            
            <div>
                <h3>Redes sociais</h3>
                <p>
                    Facebook
                </p>
                <p>
                    Instagran
                </p>
                <p>
                    Linkedin
                </p>
            </div>
        </StyledFooter>
    )
}