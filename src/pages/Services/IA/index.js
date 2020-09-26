import React, {useEffect} from 'react';

import { Container, ContactSection } from './styles';
import IA from "../../../assets/icons/IA";

import ContactForm from '../../../components/ContactForm';

export default function DataEngerieer(){

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <Container>
            <section>
                <div>
                    <IA width={600} height={600}  />
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
