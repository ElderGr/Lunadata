import React from "react";

import { StyledFooter, ImageContainer } from "./styles";

import Logo from "../../assets/Logo";
import Linkedin from "../../assets/icons/linkedin-icon.png";

export default function Footer(props){
    return(
        <StyledFooter>
            <div>
                <Logo width={100} height={100} />
            </div>
            
            <div>
                <h3>Contatos</h3>
                <p>
                    Telefone: (11) 98747-3887
                </p>
                <p>
                    Email: lunadatabr@gmail.com
                </p>
            </div>
            
            <div>
                <h3>Telefone</h3>
                <p>
                    (11)9 6080-6483
                </p>
            </div>
            
            <ImageContainer>
                <h3>Redes sociais</h3>
                <a href='https://www.linkedin.com/company/lunadata-technologies' rel="noopener noreferrer" target='_blank'>
                    <div>
                        <img src={Linkedin} alt='linkedin' />
                    </div>
                </a>
            </ImageContainer>
        </StyledFooter>
    )
}