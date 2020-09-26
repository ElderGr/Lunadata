import React, {useEffect} from 'react';

import { Container, ContactSection } from './styles';
import CloudComputing from "../../../assets/icons/CloudComputing";

import ContactForm from '../../../components/ContactForm';

export default function DataEngerieer(){

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <Container>
            <section>
                <div>
                    <CloudComputing width={600} height={600}  />
                </div>

                <div>
                    <h2>Cloud</h2>
                    <p>
                        A Lunadata está capacitada para levar sua empresa para o próximo nível, seja na
                        implantação de uma arquitetura cloud, ou para entender seu uso de um serviço já
                        contratado.
                    </p>

                    <p>
                        Na implantação, vamos mapear as áreas de negócio que podem trazer mais resultados para
                        suas metas baseados nas metas da sua empresa. Vamos levar seus dados para cloud e usar as ferramentas disponíveis para tirar os insights que vão levar sua empresa para o
                        próximo nível.
                    </p>

                    <p>
                        No entendimento de um serviço já contratado existem muitos pontos de ganho, estratégia
                        de uso de ferramentas disponíveis e não utilizadas, mapeamento de custos indevidos e
                        auxilio a equipe da sua empresa de como reduzir esses custos e continuar tirando o
                        máximo de proveito dos serviços da nuvem.
                    </p>
                </div>
            </section>
            <ContactSection id='contact-section'>
                <div>
                <h2>Gostou? Fale conosco!</h2>
                <h3>
                    Estamos prontos para lhe entregar a melhor solução para seu negócio
                </h3>
                </div>
                
                <ContactForm />
            </ContactSection>
        </Container>
    )
}
