import React from "react";

// import { Link } from "react-router-dom";

import { ItemsDetails } from "./styles";

import CloudComputing from "../../../assets/icons/CloudComputing";
import EngenhariaDados from "../../../assets/icons/EngenhariaDados";
import IA from "../../../assets/icons/IA";
import IOT from "../../../assets/icons/IOT";

export default function Services({ closeMenu }){
    return(
        <>
            <div>
                A solução perfeita para seu negócio!
            </div>
            <div>
                <h2>Principais serviços</h2>
                <div>
                    <ItemsDetails onClick={closeMenu} to='/dataEngenieer'>
                        <div>
                            <EngenhariaDados width={200} height={50} />
                        </div>
                        <div>
                            <div>Engenharia de dados</div>
                            <span>Entender seus dados e prepara-los para insights, que vão alavancar seus resultados.</span>
                        </div>
                    </ItemsDetails>

                    <ItemsDetails onClick={closeMenu} to='/cloud'>
                        <div>
                            <CloudComputing width={200} height={50} />
                        </div>
                        <div>
                            <div>Cloud Computing</div>
                            <span>Usar a escalabilidade da nuvem, e os recursos compartilhados pelas maiores empresas do mundo.</span>
                        </div>
                    </ItemsDetails>

                    <ItemsDetails onClick={closeMenu} to='/ia'>
                        <div>
                            <IA width={200} height={50} />
                        </div>
                        <div>
                            <div>Inteligência Artificial</div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet diam mauris.</span>
                        </div>
                    </ItemsDetails>

                    <ItemsDetails onClick={closeMenu} to='/iot'>
                        <div>
                            <IOT width={200} height={50} />
                        </div>
                        <div>
                            <div>IOT</div>
                            <span>Dispositivos conectados em qualquer lugar do mundo , permitindo o entendimento de acontecimentos antes ignorados.</span>
                        </div>
                    </ItemsDetails>

                </div>
            </div>
        </>
    )
}