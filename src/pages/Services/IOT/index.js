import React, {useEffect} from 'react';

import { Container, ContactSection } from './styles';
import IOT from "../../../assets/icons/IOT";

import ContactForm from '../../../components/ContactForm';

export default function DataEngerieer(){
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <Container>
            <section>
                <div>
                    <IOT width={600} height={600}  />
                </div>

                <div>
                    <h2>IOT</h2>
                    <p>
                        A Internet of Things ou Internet das Coisas, possibilita às empresas entender seus produtos
                        e o uso feito pelos clientes.
                    </p>

                    <p>
                        A Lunadata está preparada para apoiar a sua empresa na adoção de IoT, sendo sua parceira
                        na implantação e centralização dessas informações, criando pipelines inteligentes, que vão
                        coletar todos os dados gerados pelos dispositivos e disponibilizar esses dados em uma
                        estrutura devidamente operacional e monitorada, com ferramentas que vão permitir o
                        estudo desses dados e a identificação de oportunidades.    
                    </p>

                    <p>
                        Os benefícios da IoT são inúmeros como manutenção preditiva, melhor experiência para os
                        clientes e maior compreensão dos processos.    
                    </p>
                </div>
            </section>
            <ContactSection id='contact-section'>
                <div>
                <h2>Gostou? Fale conosco!</h2>
                <h3>
                    Estamos prontos para te entregar a melhor solução para seu negócio
                </h3>
                </div>
                <ContactForm />
            </ContactSection>
        </Container>
    )
}
